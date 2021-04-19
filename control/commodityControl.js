
//餐桌查询
const commodity= require('../db/model/commodity')
async function  get(){
    let data1=await commodity.find({classify:'饮料'})
    let data2=await commodity.find({classify:'小吃'})
    let data3=await commodity.find({classify:'披萨'})
    return [data1,data2,data3]
}
async function  getall(current,size){
    let data=await commodity.find({}).skip((current-1)*size).limit(size)
    let total=await commodity.find({})
    return {data,total:total.length,current,size}
}
//餐桌修改
async function  set(_id,label,value,classify){
    let data = await commodity.findOne({_id}).updateOne({label,value,classify})
    return data
}
//餐桌添加
async function  add(label,value,classify){
    let data = await commodity.create({label,value,classify})
    return data
}

//餐桌删除
async function  del(_id){
    let data = await commodity.deleteOne({_id})
    return data
}
module.exports={get,set,add,del,getall}