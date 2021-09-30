const dotenv= require('dotenv');
const mongoose=require('mongoose');
const app=require('./app')
dotenv.config({path:'./config.env'});

const DB=process.env.DATABASE;
mongoose.connect(DB,{useNewUrlParser: true,
    
}).then((con)=>{
    console.log('DB connection Successful');
}).catch(err=>{
    console.log(err);
})
const port=process.env.PORT||4000;
app.listen(port,()=>{
    console.log(`we are listening on port ${port}`);
})


