const express=require('express')
const cors=require('cors')
const app=express()

const connectDB=require('./config/connectDB')

//middleware
app.use(express.json())
app.use(cors())

connectDB()

//routes
app.use("/tecnos",require('./route/technos'))
app.use("/mission",require('./route/mission'))
app.use("/utilisateur",require('./route/utilisateur'))
app.use("/favoris",require('./route/favoris'))




//run server
const port=process.env.PORT||5000
app.listen(port,err=>err?console.log(err):console.log(`connected on port ${port}`))
