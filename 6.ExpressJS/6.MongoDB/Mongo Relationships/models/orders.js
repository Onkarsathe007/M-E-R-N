//One to Many Relationship in MongoDB 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

async function ConnectMongo() {
    await mongoose.connect('mongodb://127.0.0.1:27017/sample');
}

ConnectMongo()
    .then(() => { console.log("Connected to MongoDB") })
    .catch((e) => { console.log("Unable to establish Connection with the DB due to:" + e) });

//Schema for Customers
const customerSchema = new Schema({
    name: String,
    age: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "orders", // or any other model name you're referencing
    }],
});

//Schema for Orders 
const OrderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1,
    }
});

const Orders = mongoose.model("order", OrderSchema);
const Customer = mongoose.model("customer", customerSchema);

async function SaveCustomers() {
    var test = await Customer.insertMany([{
        name: "Suhas Sathe",
        age: 34,
    },
    {
        name: "Mangesh Raut",
        age: 54,

    }]);

    const order1 = await Orders.findOne({ name: "Jalebi" });

    const suhas = await Customer.findOne({ name: "Suhas Sathe" });

    if (suhas && order1) {
        suhas.orders.push(order1._id); // Use ._id, not whole order
        await suhas.save();
        console.log("Order added to customer:", suhas);
    } else {
        console.log("Customer or Order not found");
    }
}


function saveOrders() {
    Orders.insertMany([
        {
            name: "Jalebi",
            price: 120,
            quantity: 2,
        },
        {
            name: "Samosa",
            price: 230,
            quantity: 2,
        }
    ])
        .then(() => {
            console.log("Orders saved successfully.");
        })
        .catch((err) => {
            console.error("Error saving orders:", err);
        });
}
async function findCustomer() {
    const result = await Customer.find({}).populate("orders");
    console.log(result);
}

saveOrders();
SaveCustomers();
