import { Schema, model, models } from 'mongoose';
let fileSchema = new Schema({
    username: String,
    password: String,
    role: String,
    token: String,
});

if (!models.file) {
    module.exports = model('file', fileSchema);
} else {
    module.exports = models.file;
}
