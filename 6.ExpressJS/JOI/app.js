const joi = require("joi");

const schema = joi.object({
    username: joi.string().min(3).required(),
    age: joi.number().min(18)
});

const userInput = {
    username: "onkar sathe",
    age: 23
};

const { error, value } = schema.validate(userInput);

if (error) {
    console.log("Invalid input");
} else {
    console.log("Valid Input" + value);
}
