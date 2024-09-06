const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/Scatch").then(function(){
    console.log("Connected to Mongo");
}).catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;
