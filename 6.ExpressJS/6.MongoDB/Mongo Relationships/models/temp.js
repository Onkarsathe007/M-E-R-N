const mongoose = require("mongoose");
const schema = mongoose.Schema;


async function connectMongo() {
    mongoose.connect('mongodb://127.0.0.1:27017/testing')
}

await fsp.mkdir('logs', { recursive: true });

connectMongo()
    .then(() => { console.log("Connected to Mongo") });

const studentSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 18,
    },
    marks: mongoose.Types.ObjectId,
});

studentSchema.pre("save", async () => {
    console.log("Doc saved");
});

const student = mongoose.model("student", studentSchema);

const data = new student({
    name: "Shubham",
    age: 26
});

data.save();
