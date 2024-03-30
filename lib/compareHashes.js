'use server';

const bcrypt = require('bcrypt');

export default async function compareHashes(plainText, hash) {
    const match = await bcrypt.compare(plainText, hash);
    return match;
}
