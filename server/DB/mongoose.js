const mongoose = require('mongoose');


// mongoose.connection 
const DbServer = mongoose.connect('mongodb://localhost:27017/school',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=>{
    console.log('mongoose has been connected');
}).catch((error)=>{
    console.log('no connection from database');
})

module.exports = DbServer;