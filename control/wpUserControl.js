// 博客信息
const userModel= require('../db/model/userModel')
const WpPosts= require('../db/model/wpPosts')
const wpComments=require('../db/model/wpComments')
async function  get(){
    let user = await userModel.findOne({username:'admin'},{_id:0,token:0,user_email:0,user_phone:0,user_qq:0,password:0,username:0,roles:0})
    let post =await WpPosts.find({})
    datas=JSON.parse(JSON.stringify(user))
    post=post.length
    let comments=await wpComments.find({})
    comments=comments.length
    let pv =await WpPosts.aggregate(
        [   
            {   
                
                $group:{
                    _id:null,
                    pv:{$sum:'$browse'}
                }
            }
        ]
    )
    datas.comments=comments
    datas.post=post
    if(pv.length){
        datas.pv=pv[0].pv
    }else{
        datas.pv=0
    }
    
    return {datas}
}
async function  set(ID,user_status,user_phone,user_qq,gender,roles,introduction,avatar,name,password,username){
    let data = await userModel.updateOne({ID},{user_status,user_phone,user_qq,gender,roles,introduction,avatar,name,password,username})
    
    return {ok:data.nModified}
}
async function  add(ID,user_registered,username,password,user_status,user_phone,user_qq,gender,roles,introduction,avatar,name,user_email){
    let data = await userModel.create({ID,user_registered,username,password,user_status,user_phone,user_qq,gender,roles,introduction,avatar,name,user_email})
    return data
}
async function  userout(token){
    console.log(token)
    let data = await userModel.updateOne({token},{token:''})
    
    return {ok:data.nModified}
}
module.exports={get,set,userout,add}