const express = require('express')
const router = express.Router()
const commodity = require('../control/commodityControl')
function timestamps() {
  let timestamp=new Date().getTime()
  return timestamp
}
/**
 * @api {get} /Reservation/getcommodity 获取商品信息
 * @apiName getcommodity
 * @apiGroup 商品管理
 *
 * @apiParam {String} _id _id(必填)(主键)
 *
 * @apiSuccess {String} error 错误码.
 * @apiSuccess {String} message  提示信息.
 * @apiSuccess {Json} data  返回数据.
 * @apiSampleRequest http://localhost:3000/Reservation/getcommodity
 * @apiVersion 1.0.0
 **/
router.post('/getallcommodity',(req,res)=>{
    let {current,size}= req.body 
  commodity.getall(current,size)
  .then((data)=>{
    res.send({code:200,message:'查询成功',data})
  })
  .catch((error)=>{
    console.log(error)
    res.send({code:1000,message:'查询失败'})})
})
router.post('/getcommodity',(req,res)=>{
  commodity.get()
  .then((data)=>{
    res.send({code:200,message:'查询成功',data})
  })
  .catch((error)=>{
    console.log(error)
    res.send({code:1000,message:'查询失败'})})
})
router.post('/setcommodity',(req,res)=>{
    let {_id,label,value,classify} = req.body 
    if(_id){
        commodity.set(_id,label,value,classify)
        .then((data)=>{
            res.send({code:200,message:'修改成功',data})
        })
        .catch((error)=>{
            console.log(error)
            res.send({code:1000,message:'修改失败'})})
    }else{
        commodity.add(label,value,classify)
        .then((data)=>{
            res.send({code:200,message:'添加成功',data})
        })
        .catch((error)=>{
            console.log(error)
            res.send({code:1000,message:'添加失败'})})
    }
  
})
router.post('/delcommodity',(req,res)=>{
    let {_id} = req.body 
  commodity.del(_id)
  .then((data)=>{
    res.send({code:200,message:'删除成功',data})
  })
  .catch((error)=>{
    console.log(error)
    res.send({code:1000,message:'删除失败'})})
})
module.exports = router