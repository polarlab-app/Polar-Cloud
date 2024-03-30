'use server';
import { cookies } from 'next/headers';
const userAccount = require('@schemas/userAccount');

export default async function findUser(token) {
    if (!token) {
        var token = cookies().get('cloudToken');
    }
    const URI = process.env.MONGO_URI;
    await mongoose.connect(URI || '', {
        authSource: 'admin',
    });

    const document = await userAccount.findOne({ token: token });

    if (!document) {
        return 'User not found';
    }

    return JSON.stringify(document);
}
