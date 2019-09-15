const mongoose = require('mongoose');
const config = {
    Mongo_URI:'mongodb://bank:bank1234567@ds211268.mlab.com:11268/bank-app'
}
module.exports.config = config;

module.exports.DB = mongoose.connect(config.Mongo_URI,{useNewUrlParser: true},(err)=>{
    if(err) throw err;
    console.log('Mongodb Connected To Database');
})