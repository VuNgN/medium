const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/medium');
        console.log("Database connected");
    }
    catch (err) {
        console.log("Database NOT connected");
    }

}

module.exports = { connect }