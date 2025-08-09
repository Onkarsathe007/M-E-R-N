const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

async function ConnectMongo() {
    await mongoose.connect('mongodb://127.0.0.1:27017/sample');
}

ConnectMongo()
    .then(() => { console.log("Connected to MongoDB") })
    .catch((e) => { console.log("Unable to establish Connection with the DB due to:" + e) });

//no need to add the username and password,passport will automatically add that.
var userSchema = new Schema({
    email: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);

