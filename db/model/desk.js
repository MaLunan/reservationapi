//餐桌信息

const mongoose = require('mongoose')
let Schema= mongoose.Schema({
    ID:{type:String,require:true},//餐桌号
    person:{type:String,default:'4'},//几人桌
    state:{type:String,default:'0'},//餐桌状态
    orderID:{type:String,default:''}//订单ID
},{versionKey: false})

let  order = mongoose.model('desk',Schema,'desk')

module.exports = order