'use server';

import mongoose from 'mongoose';
const userAccount = require('@schemas/userAccount');
import { cookies } from 'next/headers';

import compareHashes from './compareHashes';
import generateToken from './generateToken';

export default async function validateLogin(username, password) {
    const URI = process.env.MONGO_URI;
    await mongoose.connect(URI || '', {
        authSource: 'admin',
    });

    const document = await userAccount.findOne({ username: username });

    if (!document) {
        return 'Error finding the specified account';
    }

    const match = await compareHashes(password, document.password);

    if (match != true) {
        return 'Invalid Password Provided';
    }

    const token = await generateToken();

    cookies().set('cloudToken', token, { secure: true, path: '/', maxAge: 2629746000, sameSite: true });
    await userAccount.findOneAndUpdate({ username: username }, { token: token });

    return 'success';
}
