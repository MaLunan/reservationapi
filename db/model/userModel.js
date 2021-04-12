
const mongoose = require('mongoose')
let userSchema= mongoose.Schema({
    username:{type:String,required:true },//账号
    password:{ type:String,required:true },//密码
    phone:String,//手机号
    token:{type:String,default:''}
},{versionKey: false})
let  userModel = mongoose.model('user',userSchema,'user')

module.exports = userModel
