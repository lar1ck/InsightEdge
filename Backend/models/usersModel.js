const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: 'String',
            required: true,
        },
        age: {
            type: 'Number',
            required: true,
         } ,
        email: {
            type: 'String',
            required: true,
            unique: true,
        },
        password: {
            type: 'String',
            required: true,
        }
    }
);

// userSchema.pre('save', async function (next) {
//     if(!this.isModified('password')) next();
//     const salt = await bcrypt.genSalt(10);
//     this.passsword = await bcrypt.hash(this.password, salt);
//     next();
// })

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const Users = mongoose.model('Users', userSchema);

module.exports = Users;