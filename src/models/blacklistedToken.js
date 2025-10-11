import { Schema, model } from "mongoose";

const blacklistTokenSchema = new Schema({
    token: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        index: { expires: 0 }
    },
});

const blacklistToken = model('blacklistToken', blacklistTokenSchema);

export default blacklistToken;