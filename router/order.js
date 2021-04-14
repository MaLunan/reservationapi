const express = require('express')
const router = express.Router()
const order = require('../control/orderControl')
const uuid = require('node-uuid');//生成ID // v1 是基于时间戳生成uuid// v4是随机生成uuid
function timestamps() {
  let timestamp=new Date().getTime()
  return timestamp
}
function startTime(time) {
  const nowTimeDate = new Date(time)
  return nowTimeDate.setHours(0, 0, 0, 0)
}
function endTime(time) {
  const nowTimeDate = new Date(time)
  return nowTimeDate.setHours(23, 59, 59, 999)
}
/**
 * @api {post} /Reservation/addorder 添加或修改 
 * @apiName addorder
 * @apiGroup  管理
 *
 * @apiSampleRequest http://localhost:3000/Reservation/addorder
 * @apiVersion 1.0.0
 **/
router.post('/addorder',(req,res)=>{
    let {people,way,goods,amount,desk} = req.body 
      let creation=timestamps()
      let ordernumber=uuid.v1()
      order.add(ordernumber,people,way,goods,state='0',creation,amount,desk)
      .then((data)=>{
        res.send({code:200,message:'添加成功',data})
      })
      .catch((error)=>{
        console.log(error)
        res.send({code:1000,message:'添加失败'})})
})
/**
 * @api {post} /Reservation/setorder 付款 
 * @apiName setorder
 * @apiGroup  管理
 *
 * @apiSampleRequest http://localhost:3000/Reservation/setorder
 * @apiVersion 1.0.0
 **/
router.post('/setorder',(req,res)=>{
    let {ordernumber} = req.body 
    let paymenttime=timestamps()
    let state='1'
      order.set(ordernumber,state,paymenttime)
      .then((data)=>{
        res.send({code:200,message:'付款成功',data})
      })
      .catch((error)=>{
        console.log(error)
        res.send({code:1000,message:'付款失败'})})
})
/**
 * @api {post} /Reservation/unsetorder 退款 
 * @apiName unsetorder
 * @apiGroup  管理
 *
 * @apiSampleRequest http://localhost:3000/Reservation/unsetorder
 * @apiVersion 1.0.0
 **/
router.post('/unsetorder',(req,res)=>{
    let {ordernumber} = req.body 
    let modify=timestamps()
    let state='2'
      order.unset(ordernumber,state,modify)
      .then((data)=>{
        res.send({code:200,message:'退款成功',data})
      })
      .catch((error)=>{
        console.log(error)
        res.send({code:1000,message:'退款失败'})})
})
/**
 * @api {post} /Reservation/getorder 获取订单信息
 * @apiName getorder
 * @apiGroup  管理
 *
 * @apiSampleRequest http://localhost:3000/Reservation/getorder
 * @apiVersion 1.0.0
 **/
router.post('/getorder',(req,res)=>{
    let {ordernumber} = req.body 
      order.get(ordernumber)
      .then((data)=>{
        res.send({code:200,message:'成功',data})
      })
      .catch((error)=>{
        console.log(error)
        res.send({code:1000,message:'失败'})})
})
/**
 * @api {post} /Reservation/getorderSelect 获取订单信息
 * @apiName getorderSelect
 * @apiGroup  管理
 *
 * @apiSampleRequest http://localhost:3000/Reservation/getorderSelect
 * @apiVersion 1.0.0
 **/
router.post('/getorderSelect',(req,res)=>{
    let {state} = req.body 
      order.getState(state)
      .then((data)=>{
        res.send({code:200,message:'成功',data})
      })
      .catch((error)=>{
        console.log(error)
        res.send({code:1000,message:'失败'})})
})

router.post('/getpigData',(req,res)=>{
  let {date} = req.body 
      let startdate=startTime(date)
      let enddate= endTime(date)
      order.getpigData(startdate,enddate)
      .then((data)=>{
        res.send({code:200,message:'成功',data})
      })
      .catch((error)=>{
        console.log(error)
        res.send({code:1000,message:'失败'})})
})
/**
 * @api {get} /Reservation/delorder 删除 
 * @apiName delorder
 * @apiGroup  管理
 *

 *
 * @apiSuccess {String} error 错误码.
 * @apiSuccess {String} message  提示信息.
 * @apiSuccess {Json} data  返回数据.
 * @apiSampleRequest http://localhost:3000/Reservation/delorder
 * @apiVersion 1.0.0
 **/
router.post('/delorder',(req,res)=>{
  let {ID} = req.body 
  order.del(ID)
  .then((data)=>{
    res.send({code:0,message:'删除成功',data})
  })
  .catch((error)=>{
    console.log(error)
    res.send({code:1,message:'删除失败'})})
})
module.exports = router