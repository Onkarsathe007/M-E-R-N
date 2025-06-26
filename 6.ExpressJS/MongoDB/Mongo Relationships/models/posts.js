const mongoose = require("mongoose");
const Schema = mongoose.Schema;

async function ConnectMongo() {
    await mongoose.connect('mongodb://127.0.0.1:27017/sample');
}

ConnectMongo()
    .then(() => { console.log("Connected to MongoDB") })
    .catch((e) => { console.log("Unable to establish Connection with the DB due to:" + e) });

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    comment: String,
    username: String,
});

const postModel = new mongoose.model("post", postSchema);


const userSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: String,
    bio: String,
    followers: Number,
    follwing: Number,
});

const userModel = mongoose.model("user", userSchema);

function saveUserData() {
    var user1 = new userModel({
        username: "theonakarsathe",
        bio: "I want ctrl",
        followers: 1000,
        follwing: 272,
    });
    user1.save();
}

async function savePostData(user_id) {
    await userModel.findOne({ username: user_id })
        .then((res) => {
            console.log(res)
            var post = new postModel({
                user: res._id,
                comment: "perfect post",
                username: res.username,
            });
            post.save();
        })
        .catch((e) => { console.log("An error " + e + "occured") });
}

savePostData("theonakarsathe");
