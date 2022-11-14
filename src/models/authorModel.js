const { default: mongoose } = require("mongoose");


const authorSchema = new mongoose.Schema(
    { fname: {
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    title:{
        type:String,
        enum:[Mr, Mrs, Miss]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type:String,
        required:true
    }}
)

module.exports = mongoose.model("Author", authorSchema)