
//订单查询
const order= require('../db/model/order')
const desks= require('../db/model/desk')
async function  get(ordernumber){
    let data = await order.findOne({ordernumber})
    return data
}
async function  getState(state){
    if(state!=='all'){
        var data = await order.find({state}).sort({creation:-1,paymenttime:-1})
    }else{
        var data = await order.find({}).sort({creation:-1,paymenttime:-1})
    }
    return data
}
//订单修改
async function  set(ordernumber,state,paymenttime){
    let data = await order.findOne({ordernumber}).updateOne({state,paymenttime})
    return data
}
//订单添加
async function  add(ordernumber,people,way,goods,state,creation,amount,desk){
    let data = await order.create({ordernumber,people,way,goods,state,creation,amount})
    let datas = await desks.findOne({ID:desk}).updateOne({state:'1',orderID:ordernumber})
    return data
}

//订单删除
async function  del(ID){
    let datas = await order.deleteOne({ID})
    if(datas){
        var data = await wpComments.deleteMany({comment_post_ID:ID})
    }else{
        return {data:datas}
    }
    return data
}

module.exports={get,set,add,del,getState}