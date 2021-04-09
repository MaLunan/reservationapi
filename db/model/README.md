# 表结构

```js
//versionKey 是否自动添加版本信息
// Schema 字段限制规范
const mongoose = require('mongoose')
let foodSchema= mongoose.Schema({
    theme:{ type:String,required:true },
    pv:false,
    likeNum:false
},{versionKey: false})
let  titleMsg = mongoose.model('theme',foodSchema,'theme')

module.exports = titleMsg

```