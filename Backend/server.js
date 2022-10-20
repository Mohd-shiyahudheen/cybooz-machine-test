const express = require('express')
const dotenv = require('dotenv')
const userRouter =require('./App/module1/userRouter')
const adminRouter = require('./App/module2/adminRouter')
var fp = require("find-free-port")




const app = express()
dotenv.config()
app.use(express.json())



app.use('/user',userRouter)
app.use('/admin',adminRouter)



fp(5000).then(([freep]) => {
    const PORT =  freep
    app.listen(PORT, () => console.log(`Port Started on ${PORT}`))
}).catch((err) => {
    console.error(err);
});




