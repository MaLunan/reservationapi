const express = require('express')
const router = express.Router()
const order = require('../control/orderControl')
const uuid = require('node-uuid');//生成ID // v1 是基于时间戳生成uuid// v4是随机生成uuid
function timestamps() {
  let timestamp=new Date().getTime()
  return timestamp
}
/**
 * @api {post} /Reservation/addorder 添加或修改文章
 * @apiName addorder
 * @apiGroup 文章管理
 *
 * @apiParam {String} ID 文章ID
 * @apiParam {String} post_author 文章作者
 * @apiParam {String} post_date 日期
 * @apiParam {String} post_content 文章内容
 * @apiParam {String} post_title 文章名.
 * @apiParam {String} post_excerpt 摘自
 * @apiParam {String} post_status 文章状态
 * @apiParam {String} comment_status 评论状态
 * @apiParam {String} type 分类.
 * @apiParam {String} post_img 封面图片.
 * @apiParam {String} editor 编辑器.
 *
 * @apiSuccess {String} error 错误码.
 * @apiSuccess {String} message  提示信息.
 * @apiSuccess {Json} data  返回数据.
 * @apiSampleRequest http://localhost:3000/Reservation/addorder
 * @apiVersion 1.0.0
 **/
router.post('/addorder',(req,res)=>{
    let {people,way,goods} = req.body 
      let creation=timestamps()
      let ordernumber=uuid.v1()
      order.add(ordernumber,people,way,goods,state='0',creation)
      .then((data)=>{
        res.send({code:200,message:'添加成功',data})
      })
      .catch((error)=>{
        console.log(error)
        res.send({code:1000,message:'添加失败'})})
})
/**
 * @api {get} /Reservation/delorder 删除文章
 * @apiName delorder
 * @apiGroup 文章管理
 *
 * @apiParam {String} ID 文章ID
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