
const middleWare = (req, res, next) => {
    let ip =req.ip
    let today = new Date();
    let time = () => {
        return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    }
    console.log(time());
    console.log(ip);
    next()
}


module.exports=middleWare