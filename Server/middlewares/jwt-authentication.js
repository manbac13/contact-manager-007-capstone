const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "fdnbgkd656d5g6dfgmnbdfjfg";
const Credential = require("../models/usermodels");
var userAuthentication = async (req,res,next)=>{
        const {authorization} = req.headers;
        
        if(!authorization){
            console.log("Sorry You are not logged in")
            return res.json({
                status:"authorization failed",
                message:"Looks like you are not logged in, Kindly register or signup first"
            })
        }
        let token = authorization.split(" ")[1];
        
        if(authorization && authorization.startsWith("Bearer")){
            try {
            const {userId} = jwt.verify(token,JWT_SECRET_KEY);
            req.user = await Credential.findById(userId).select("-password");
            next();
        } catch (error) {
                res.status(401).json({
                    status:"Failed",
                    message:"unauthorized user"
                })
            }
        }
        else{
            res.status(401).json({
                status:"Failed",
                message:"Kindly login"
            })
        }
}
module.exports = userAuthentication;