const express =require('express')
const router = express.Router()
const middleWare = require('../../MiddleWare/middleWare')



router.get('/auth',middleWare)

router.get('/register',middleWare)



module.exports=router         