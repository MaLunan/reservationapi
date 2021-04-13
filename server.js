const express = require('express')
const path = require('path')
const https = require('https');
const http = require('http');
const fs = require('fs');
const db = require('./db/connect')
const Jwt = require('./utils/jwt')
const User = require('./db/model/userModel')
const order =require('./router/order')
const desk =require('./router/desk')
// 启动服务器的同时连接数据库
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// 静态资源目录
app.use('/',express.static(path.join(__dirname,'./')))
// 路由分发
const login=require('./router/userrouter')
//登录
app.use('/Reservation/',(req, res, next)=>{
  //解决跨域
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  let token = req.headers.token
  // 用户有咩有传token 
  if(!token){return res.send({code:403,msg:'token缺失'})}
  // 验证token 是不是真的
  let data = Jwt.verifyToken(token)
  if(data){
    // token 合法 
    let _id=data._id 
    // 判断超时 
    let nowDate=(new Date()).getTime()
    if(nowDate-data.ctime>=data.ot){
      return res.send({code:403,msg:'登录超时'})
    }
    // 判断id和token是否匹配
    User.find({_id,token})
    .then((data)=>{
      if(data.length===1){
        next()
      }else{
        res.send({code:403,msg:'token失效'})
      }
    })
  }else{
    res.send({code:403,msg:'未登录'})
  }
},[order,desk])
//登录
app.use('/user/',(req, res, next)=>{
  //解决跨域
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
},login)
//http链接 打开这个
app.listen(3000,()=>{
  console.log('服务器启动')
})
