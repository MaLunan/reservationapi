
//餐桌查询
const desk= require('../db/model/desk')
async function  get(){
    let data=await desk.find({})
    return data
}
//餐桌修改
async function  set(ID,post_content,post_excerpt,post_status,comment_status,browse,post_title,type,post_author,post_modified,post_img,editor,post_label,description){
    let data = await desk.findOne({ID}).updateOne({post_content,post_excerpt,post_status,comment_status,browse,post_title,type,post_author,post_modified,post_img,editor,post_label,description})
    return data
}
//餐桌添加
async function  add(desknumber,people,way,goods,state,creation){
    let data = await desk.create({desknumber,people,way,goods,state,creation})
    return data
}

//餐桌删除
async function  del(ID){
    let datas = await desk.deleteOne({ID})
    if(datas){
        var data = await wpComments.deleteMany({comment_post_ID:ID})
    }else{
        return {data:datas}
    }
    return data
}
//浏览量增加
async function  setBrowse(ID){
    let data = await desk.updateOne({ID},{$inc:{browse:1}})
    return data
}
module.exports={get,set,add,del,setBrowse}