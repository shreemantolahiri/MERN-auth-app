import mongoose from 'mongoose';    
import bcrypt from 'bcryptjs';
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // no two users can have the same email
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true }
);

//decrypting password before saving
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

//comparing password
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

const User =mongoose.model('User', userSchema);

export default User;