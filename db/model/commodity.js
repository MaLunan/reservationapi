//商品信息

const mongoose = require('mongoose')
let Schema= mongoose.Schema({
    label:{type:String,require:true},//商品名称
    value:{type:String,require:true},//单价
    classify:{type:String,require:true},//分类
    num:{type:String,default:'0'},//数量
},{versionKey: false})

let  commodity = mongoose.model('commodity',Schema,'commodity')

module.exports = commodity