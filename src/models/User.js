import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username: { type: String, required: true, maxlength: 25, unique: true},
    password: { type: String, required: true, minlength:6 },
    email: { type: String, required: true, maxlength: 30, unique: true},
    nickname: { type: String, minlength: 3, maxlength: 15 },
})

const User = mongoose.model("User", userSchema);

export default User;