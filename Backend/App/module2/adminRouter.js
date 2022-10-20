const express = require('express')
const router =express.Router()
const middleWare = require('../../MiddleWare/middleWare')



router.get('/demo',middleWare)


module.exports=router