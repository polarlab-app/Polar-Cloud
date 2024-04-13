import { Schema, model, models } from 'mongoose';
let fileSchema = new Schema({
    path: String,
    owner: String,
    name: String,
    extension: String,
    size: String,
    dateCreated: String,
});

if (!models.file) {
    module.exports = model('file', fileSchema);
} else {
    module.exports = models.file;
}
