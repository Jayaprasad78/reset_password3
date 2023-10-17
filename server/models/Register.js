const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    work:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
    image: {
        data: Buffer, // Use Buffer to store binary data
        contentType: String, // Store content type (e.g., 'image/jpeg')
      },
    token: { 
        type: String 
    },
   
})

const RegisterModel = mongoose.model("new_user", RegisterSchema);
module.exports = RegisterModel;
