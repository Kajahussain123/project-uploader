const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("___MongoDB Atlas Connected___");
}).catch((err)=>{
    console.log(`__MongoDB Atlas Connection Failed !! ${err}__`);
})