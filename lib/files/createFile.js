'use server';

const fs = require('fs').promises;
const path = require('path');
const fileSchema = require('@schemas/file');
const mongoose = require('mongoose');
import findUser from '../findUser';
import { cookies } from 'next/headers';

export default async function createFile(directory, fileName) {
    try {
        const token = cookies().get('cloudToken').value;
        if (!token) {
            return 'error';
        }

        const user = await findUser(token);
        if (!user) {
            return 'error';
        }

        const filePath = path.join(process.cwd(), directory, fileName);
        console.log(filePath);
        await fs.writeFile(filePath, '');

        const stats = await fs.stat(filePath);
        const fileSizeInBytes = stats.size;

        const URI = process.env.MONGO_URI;
        await mongoose.connect(URI || '', {
            authSource: 'admin',
        });

        const newFile = new fileSchema({
            path: directory.toString() || '/common',
            owner: JSON.parse(user).id,
            name: fileName,
            extension: '.' + fileName.split('.').pop,
            size: fileSizeInBytes.toString(),
            dateCreated: new Date().toISOString(),
            dateModified: new Date().toISOString(),
        });

        await newFile.save();
        console.log(`File ${fileName} created successfully in ${directory}.`);
    } catch (error) {
        console.error(`Error creating file ${fileName} in ${directory}: ${error}`);
    }
}
