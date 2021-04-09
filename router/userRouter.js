//登录与注册
const express = require('express')
const router = express.Router()
const  User = require('../db/model/userModel')
const Jwt = require('../utils/jwt')
const uuid = require('node-uuid');//生成ID // v1 是基于时间戳生成uuid// v4是随机生成uuid
function timestamps() {
  let timestamp=new Date().getTime()
  return timestamp
}
//引入和用户表相关的数据模型
/*
1.验证用户发送的验证码 和服务器保存的是否一致
*/ 
/**
 * @api {get} /user/register 用户注册
 * @apiName register
 * @apiGroup 用户注册登录
 *
 * @apiParam {String} username 用户账号
 * @apiParam {String} password 用户密码.
 * @apiParam {String} phone 手机号.
 *
 * @apiSuccess {String} error 错误码.
 * @apiSuccess {String} message  提示信息.
 * @apiSuccess {Json} data  返回数据.
 * @apiSampleRequest http://localhost:3000/user/register
 * @apiVersion 1.0.0
 */
//注册
router.post('/register',(req,res)=>{
   let {username,password,phone} = req.body
  // let {username,password} = req.body
   //用户的账号 username 就是邮箱 
   //验证用户发送的验证码是否一致
   User.findOne({username}).then(val=>{
     console.log(password.length)
     if(password.length<6){
      return res.send({err:1000,message:'密码不得小于6位'})
     }
    if(val){
      return res.send({err:1000,message:'用户已存在'})
    }
     User.insertMany({username,password,phone})
     .then((data)=>{
      res.send({code:200,message:'成功注册'})
     })
   })
})
/**
 * @api {post} /user/login 用户登录
 * @apiName login
 * @apiGroup 用户注册登录
 *
 * @apiParam {String} username 用户账号
 * @apiParam {String} password 用户密码.
 *
 * @apiSuccess {String} error 错误码.
 * @apiSuccess {String} message  提示信息.
 * @apiSuccess {Json} data  返回数据.
 * @apiSampleRequest http://localhost:3000/user/login
 * @apiVersion 1.0.0
 */
//登陆
router.post('/login',(req,res)=>{
  console.log(req.body)
  let {username,password}=req.body
  let token=null
  User.find({username,password})
  .then((data)=>{
     if(data.length>=1){
      //  创建一个token 并且返回
      // 获取登录用户的主键id
       let userInfo={_id:data[0]._id,ot:1000*60*60*24*7}
        token=Jwt.createToken(userInfo)

      return User.updateOne({_id:data[0]._id},{token:token})
     }else{
       throw '登录失败'
     }
  })
  .then((data)=>{
    //  User.updateOne 成功之后的调用
    res.send({code:200,message:'登录ok',data:{token:token}})
  })
  .catch((err)=>{
    console.log(err)
    res.send({code:1000,message:'登录失败'})
  })
})

module.exports = router