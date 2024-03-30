import { Schema, model, models } from 'mongoose';
let userAccountSchema = new Schema(
    {
        id: String,
        username: String,
        password: String,
        role: String,
        token: String,
    },
    {
        collection: 'accounts',
    }
);

if (!models.userAccount) {
    module.exports = model('userAccount', userAccountSchema);
} else {
    module.exports = models.userAccount;
}
