'use server';

const fs = require('fs').promises;
import { cookies } from 'next/headers';
const userAccount = require('@schemas/userAccount');
const fileSchema = require('@schemas/file');
const mongoose = require('mongoose');

export default async function deleteFile(filePath) {
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

        const file = await fileSchema.findOne({ path: filePath });
        if (!file || file.owner.toString() !== user.id.toString()) {
            return 'error';
        }

        await fs.unlink(filePath);
        console.log(`File at ${filePath} was deleted successfully.`);
    } catch (error) {
        console.error(`Error deleting file at ${filePath}: ${error}`);
    }
}
