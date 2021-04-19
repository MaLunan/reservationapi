//
const mongoose = require('mongoose')
let Schema= mongoose.Schema({
    ordernumber:{type:String,required:true },//订单号
    people:{ type:Number,required:true },//人数
    way:{type:String,required:true},//方式
    goods:{type:Object,required:true},//商品
    state:{type:String,required:true},//支付状态
    creation:{type:Number,required:true},//创建时间
    modify:{type:Number,default:''},//修改时间
    paymenttime:{type:Number,default:''},//支付时间
    amount:{type:Number,required:true},//付款金额
},{versionKey: false})

let  order = mongoose.model('order',Schema,'order')

module.exports = order