const express = require('express')
const path = require('path')
const https = require('https');
const http = require('http');
const fs = require('fs');
const db = require('./db/connect')
const Jwt = require('./utils/jwt')
const User = require('./db/model/userModel')
const order =require('./router/order')
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
  next();
},[order])
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
