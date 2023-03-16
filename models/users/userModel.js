//Create table for user
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true }, //only one email, no duplicate
    rol: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }
}, {
    timestamps: true //for date
});

const User = mongoose.model('User', userSchema);
export default User;