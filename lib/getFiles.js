'use server';

import fs from 'fs';
import path from 'path';

export default async function getFiles(ptf) {
    const directoryPath = path.join(process.cwd(), ptf || 'personal');

    const files = fs.readdirSync(directoryPath);
    const structure = files.map((file) => ({
        name: file,
        path: path.join(directoryPath, file),
        isDirectory: fs.statSync(path.join(directoryPath, file)).isDirectory(),
    }));

    console.log(structure);

    return JSON.stringify(structure);
}
