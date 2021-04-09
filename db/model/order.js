//文章基础信息表

const mongoose = require('mongoose')
let Schema= mongoose.Schema({
    ordernumber:{type:String,required:true },//订单号
    people:{ type:String,required:true },//人数
    way:{type:String,default:null},//方式
    goods:{type:Object,default:{}},//商品
    state:{type:String,default:'0'},//支付状态
    creation:{type:String,default:''},//创建时间
    modify:{type:String,default:''},//修改时间
    paymenttime:{type:String,default:''},//支付时间
},{versionKey: false})

let  order = mongoose.model('order',Schema,'order')

module.exports = order