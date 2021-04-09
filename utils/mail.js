
const nodemailer = require("nodemailer");
//  创建邮件的发送对象
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '723325701@qq.com', // 邮箱账号
      pass: 'wzhfototpgtrbcgf' // 邮箱smtp验证码
    }
  });
//  let img='../img/logo.jpg'

  
  module.exports={
    sendMail(gomail,content,username,theme){
      console.log(content)
       //创建邮件内容
        let info={
          from: `"MaLunan-个人博客|IT技术博客" <723325701@qq.com>`, // sender address
          to: gomail,// list of receivers
          subject: "你在MaLunan-个人博客|IT技术博客的评论得到了回复", // Subject line
          // text: "Hello world?", // plain text body
          html: `<div>
                    <h3>${username}回复内容：${content}</h3>
                    <a href="https://zmln1021.cn${theme}">查看原文</a>
                </div>` // html body
        }
        console.log(info)
       return new Promise((resolve,reject)=>{
        transporter.sendMail(info,(err,data)=>{
          console.log(err)
          if(err){
            reject({err:-3,msg:'邮件发送失败'})
          }else{
            resolve({err:0,msg:"发送ok"})
          }
        })
       })
      
    },
    //邮箱注册验证码
    verificationCode(mail,code){
       //创建邮件内容
        let info={
          from: `"MaLunan-个人博客|IT技术博客" <723325701@qq.com>`, // sender address
          to: mail,// list of receivers
          subject: "您的邮箱注册验证码", // Subject line
          // text: "Hello world?", // plain text body
          html: `<div>
                    <h3>邮箱验证码为:${code}</h3>
                </div>` // html body
        }
        console.log(info)
       return new Promise((resolve,reject)=>{
        transporter.sendMail(info,(err,data)=>{
          console.log(err)
          if(err){
            reject({err:-3,msg:'邮件发送失败'})
          }else{
            resolve({err:0,msg:"发送ok"})
          }
        })
       })
      
    }
  }
 
