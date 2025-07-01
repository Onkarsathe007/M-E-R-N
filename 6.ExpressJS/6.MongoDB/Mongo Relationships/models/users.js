const mongoose = require('mongoose');
const Schema = mongoose.Schema;

async function ConnectMongo() {
    await mongoose.connect('mongodb://127.0.0.1:27017/sample');
}

ConnectMongo()
    .then(() => { console.log("Connected to MongoDB") })
    .catch((e) => { console.log("Unable to establish Connection with the DB due to:" + e) });

//defining an mongoDB Schema.
var userSchema = new Schema({
    name: String,
    age: Number,
    address: [{
        city: String,
        Village: String,
        pincode: Number
    }
    ]
});

//creating an model.
const User = mongoose.model("User", userSchema);

var user1 = new User({
    name: "onkar Sathe",
    age: 18,
    address: [{
        city: "pune",
        Village: "Ahmednagar",
        pincode: 901919
    }]
});

user1.save();
