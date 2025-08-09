const mongoose = require("mongoose");
const Schema = mongoose.Schema;

async function ConnectMongo() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Fastshop');
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
        username: "Priti Sathe",
        bio: "I am priti, I love pets",
        followers: 2322,
        follwing: 4,
    });
    user1.save();
}

async function savePostData(user_id) {
    await userModel.findOne({ username: user_id })
        .then((res) => {
            console.log(res)
            var post = new postModel({
                user: res._id,
                comment: "very bad",
                username: res.username,
            });
            post.save();
        })
        .catch((e) => { console.log("An error " + e + "occured") });
}

var deleteUser = async (user) => {
    userModel.deleteOne({ username: user })
        .then((res) => {
            console.log(res);
        })
        .catch((e) => { console.log("An error" + e + "Occured") })
    //In this function problem is that, we are not deleting an posts that is releventreferal to the user.
    // so, we use mongoose middlewares.
}


const getData = (async () => {
    let result = await postModel.findOne({}).populate("user");
    console.log(result);
});

deleteUser("theonakarsathe");
