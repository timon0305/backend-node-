const mongoose = require('mongoose');

const MONGURI = 'mongodb://localhost:27017/node-auth';

const InitialMongoServer = async () => {
        try {
        await mongoose.connect(MONGURI, {
            useNewUrlParser: true
        });
        console.log("Connected to DB !!");
    }   catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitialMongoServer;