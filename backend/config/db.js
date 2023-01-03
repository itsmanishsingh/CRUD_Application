const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectToDB = ()=>{
    mongoose.connect(process.env.MONGO_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // mongoose.connect('mongodb://127.0.0.1/alphacrud')
    .then((conn)=>{
        console.log(`Connected DB : ${conn.connection.host}`);
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = connectToDB;