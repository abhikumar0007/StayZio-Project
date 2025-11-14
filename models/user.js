const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});


userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);


// i am using rest api in our project and mongodb using for database so how to activate our search bar to search things in our website so give me updated code . and our website is build on mongodb, expressjs, nodejs, ejs