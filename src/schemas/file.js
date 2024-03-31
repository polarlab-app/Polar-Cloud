import { Schema, model, models } from 'mongoose';
let fileSchema = new Schema({
    path: String,
    name: String,
    extension: String,
    dateCreated: String,
});

if (!models.file) {
    module.exports = model('file', fileSchema);
} else {
    module.exports = models.file;
}
