// load .env file
require('dotenv').config()


// import express
const express=require('express')

const cors=require('cors')

const routes=require('./Routes/route')
require('./db/connection')


// create server using express 
const projectServer=express()
projectServer.use(cors())
// convert all incoming json data to js data
projectServer.use(express.json())

projectServer.use(routes)

// export uploads folder to client
projectServer.use('/uploads',express.static('./uploads'))

const PORT=4000 || process.env.PORT
projectServer.listen(PORT,()=>{
    console.log(`_____Project Server Started At Port Number ${PORT}_____`);
})


// resolve api requests
projectServer.get('/',(req,res)=>{
    res.send(`<h1>Projects server started....</h1>`)
})

