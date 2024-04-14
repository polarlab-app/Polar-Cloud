'use server';
const fs = require('fs').promises;
import { cookies } from 'next/headers';
const userAccount = require('@schemas/userAccount');
const fileSchema = require('@schemas/file');
const mongoose = require('mongoose');
const path = require('path');

export default async function createFolder(directory, folderName) {
    try {
        const token = cookies().get('cloudToken').value;
        if (!token) {
            return 'error';
        }

        const URI = process.env.MONGO_URI;
        await mongoose.connect(URI || '', {
            authSource: 'admin',
        });

        const user = await userAccount.findOne({ token: token });
        if (!user) {
            return 'error';
        }

        const directoryPath = path.join(process.cwd(), 'common', folderName);
        console.log(directoryPath);
        await fs.mkdir(directoryPath);

        const newFolder = new fileSchema({
            path: directoryPath,
            owner: user.id,
            name: folderName,
            extension: '',
            size: '0',
            dateCreated: new Date().toISOString(),
            dateModified: new Date().toISOString(),
        });

        await newFolder.save();
    } catch (error) {
        console.error(`Error creating folder ${folderName}: ${error}`);
    }
}
