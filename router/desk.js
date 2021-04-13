const express = require('express')
const router = express.Router()
const desk = require('../control/deskControl')
const uuid = require('node-uuid');//生成ID // v1 是基于时间戳生成uuid// v4是随机生成uuid
function timestamps() {
  let timestamp=new Date().getTime()
  return timestamp
}
/**
 * @api {get} /Reservation/getdesk 删除
 * @apiName getdesk
 * @apiGroup 管理
 *
 * @apiParam {String} ID ID
 *
 * @apiSuccess {String} error 错误码.
 * @apiSuccess {String} message  提示信息.
 * @apiSuccess {Json} data  返回数据.
 * @apiSampleRequest http://localhost:3000/Reservation/getdesk
 * @apiVersion 1.0.0
 **/
router.post('/getdesk',(req,res)=>{
  desk.get()
  .then((data)=>{
    res.send({code:200,message:'查询成功',data})
  })
  .catch((error)=>{
    console.log(error)
    res.send({code:1000,message:'查询失败'})})
})
router.post('/setdesk',(req,res)=>{
    let {ID} = req.body 
    let state='0'
    let orderID=''
  desk.set(ID,state,orderID)
  .then((data)=>{
    res.send({code:200,message:'修改成功',data})
  })
  .catch((error)=>{
    console.log(error)
    res.send({code:1000,message:'修改失败'})})
})
module.exports = router