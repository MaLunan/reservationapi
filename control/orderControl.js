
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
async function  getpigData(startdate,enddate){
    let Tdatas =await order.aggregate(
        [   
            {
                $match:{
                    state:'1',
                    creation:{$gt:startdate,$lte:enddate}
                }
            },
            {   
                
                $group:{
                    _id:null,
                    amount:{$sum:'$amount'},
                    people:{$sum:'$people'},
                }
            },
            
        ]
    )
    let Fdatas =await order.aggregate(
        [   
            {
                $match:{
                    state:'2',
                    creation:{$gt:startdate,$lte:enddate}
                }
            },
            {   
                
                $group:{
                    _id:null,
                    amount:{$sum:'$amount'},
                    people:{$sum:'$people'},
                }
            },
            
        ]
    )
    let Tordernumber=await order.find({state:'1',creation:{$gt:startdate,$lte:enddate}})
    let Fordernumber=await order.find({state:'2',creation:{$gt:startdate,$lte:enddate}})
    let way=await order.find({way:'堂食',creation:{$gt:startdate,$lte:enddate}})
    let Tamount=0
    let Tpeople=0
    let Famount=0
    let Fpeople=0
    if(Tdatas.length){
        Tamount=Tdatas[0].amount
        Tpeople=Tdatas[0].people
    }
    if(Fdatas.length){
        Famount=Fdatas[0].amount
        Fpeople=Fdatas[0].people
    }
    data={
        Tordernumber:Tordernumber.length,
        Fordernumber:Fordernumber.length,
        ordernumber:Fordernumber.length+Tordernumber.length,
        way:way.length,
        amount:Tamount+Famount,
        people:Tpeople+Fpeople,
        Tamount,
        Tpeople,
        Famount,
        Fpeople,
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
    if(way==='堂食'){
        let datas = await desks.findOne({ID:desk}).updateOne({state:'1',orderID:ordernumber})
    }
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

module.exports={get,set,add,del,getState,getpigData}