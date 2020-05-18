const mongoose = require('mongoose');
const config = require('./../config/db');


const connectDB = async () => {
    try {
        await mongoose.connect(config.db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.log(config.db);
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;