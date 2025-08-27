const mongoose = require("mongoose");
const joi = require("joi");

async function ConnectMongo() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sample");
}

ConnectMongo()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log("Unable to establish Connection with the DB due to:" + e);
  });

const userSchema = mongoose.Schema({
  name: String,
  age: {
    type: Number,
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);

const joiSchema = joi.object({
  name: joi.string().min(3).max(10).required(),
  age: joi.number().min(18).max(100).required(),
});

const userInput = {
  name: "priti",
  age: 1,
};

const { error, value } = joiSchema.validate(userInput);

if (error) {
  console.log("Invalid input");
} else {
  userModel
    .insertOne({
      name: `userInput.name`,
      age: userInput.age,
    })
    .then(() => {
      console.log("data saved ");
    })
    .catch((e) => {
      console.log("error " + e + " occred");
    });
}
