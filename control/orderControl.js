
//订单查询
const order= require('../db/model/order')
async function  get(data,size,page,sort){
    let Count=await order.find(data)
    Count=Count.length
    let Post = await order.find(data).skip((page-1)*Number(size)).limit(Number(size)).sort({[sort]:-1})
    let datas=JSON.parse(JSON.stringify(Post))
    for(let i=0;i<datas.length;i++){
        let commentCount=await wpComments.find({comment_post_ID:datas[i].ID,comment_approved:datas[i].post_status})
        datas[i].commentCount=commentCount.length
    }
    
    return {Count,page:Number(page),size:Number(size),datas}
}
//订单修改
async function  set(ID,post_content,post_excerpt,post_status,comment_status,browse,post_title,type,post_author,post_modified,post_img,editor,post_label,description){
    let data = await order.findOne({ID}).updateOne({post_content,post_excerpt,post_status,comment_status,browse,post_title,type,post_author,post_modified,post_img,editor,post_label,description})
    return data
}
//订单添加
async function  add(ordernumber,people,way,goods,state,creation){
    let data = await order.create({ordernumber,people,way,goods,state,creation})
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
//浏览量增加
async function  setBrowse(ID){
    let data = await order.updateOne({ID},{$inc:{browse:1}})
    return data
}
module.exports={get,set,add,del,setBrowse}