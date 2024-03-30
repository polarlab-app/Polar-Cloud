'use server';

const bcrypt = require('bcrypt');

export default async function hashData(data) {
    const saltRounds = 12;
    const hash = await bcrypt.hash(data, saltRounds);
    return hash;
}
