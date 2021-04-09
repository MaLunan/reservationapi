# 操作mongodb数据库

## 1.查find(),findOne()

find({}，cb(){}) 不传递默认显示全部  第二个参数如果是对象，则对象内的字段不返回
distinct ：筛选不重复的值或字段  distinct(field)
$lt,$lte,$gt,$gte：分别对应: <,<=,>,>=.  model.find({num:{$gt:12}},cb)
$in：查询包含键值的文档,model.find({name:{$in:[“jimmy”,“sam”]}})
$nin：返回不匹配查询条件文档,都是指定数组类型 model.find({name:{$nin:[“jimmy”,“sam”]}})
$ne 表示不包含指定值 model.find({name:{$ne:“sam”}})
$or： 表示或查询查询多个键值的任意给定值  model.find({$or:[{ color: ‘red’ }, { status: ‘emergency’ }]})
$exits： 表示键值是否存在; model.find({name:{$exits:true}})
$all：通常用来匹配数组里面的键值,匹配多个值(同时具有) $all:[“apple”,“banana”,“peach”]}
$size：model.find({name:{$size:3}}); 匹配name的数组长度为3
$slice：query.slice(‘comments’, 5)
*limit:**用来获取限定长度的内容.query.limit(20); //只返回前20个内容
skip: 返回，跳过指定doc后的值.query.skip(2);
sort: 用来设置根据指定字段排序. 可以设置为1:升序, -1:降序.query.sort({name:1,age:-1});
$regex:模糊查询 //正则表达式
$options:匹配规则 
$sum 求和计算
连表查询并分组($group)， _id为null只分一组
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
筛选($match)，
指定字段($project)，
参数 i ====== 加了这个参数，表示不区分大小写
参数 m ===== 查询匹配中使用了锚，例如^（代表开头）和$（代表结尾），以及匹配n后的字符串
参数 x =====忽视所有空白字符
参数 s =====允许点字符（.）匹配所有的字符，包括换行符

$project 修改输入文档的结构。可以用来重命名、增加或删除域，也可以用于创建计算结果以及嵌套文档。对应project()方法

 $match 用于过滤数据，只输出符合条件的文档。$match使用MongoDB的标准查询操作。对应match()。

 $limit 用来限制MongoDB聚合管道返回的文档数。对应limit()方法

 $skip 在聚合管道中跳过指定数量的文档，并返回余下的文档。对应skip()。

 $unwind 将文档中的某一个数组类型字段拆分成多条，每条包含数组中的一个值。对应unwind()方法

 $group 将集合中的文档分组，可用于统计结果。对应group()方法

 $sort 将输入文档排序后输出。对应sort()方法

 $geoNear 输出接近某一地理位置的有序文档。对应near()。

$group表达式说明：

 $sum  计算总和

 $avg  计算平均值

 $min  获取每一组集合中所有文档对应值得最小值

 $max  获取每一组集合中所有文档对应值得最大值

 $push  在结果文档中插入值到一个数组中

 $addToSet  在结果文档中插入值到一个数组中，但不创建副本

 $first  根据资源文档的排序获取第一个文档数据

 $last  根据资源文档的排序获取最后一个文档数据
```
# 2.删remove() deleteOne deleteMany

#3.增save() create()

#4.改update()，updateMany()。insertMany（）,updateOne()
```js
$inc : 变量 += 1 , 将查询到的结果 加上某一个值 然后保存 .update({"id":15},{$inc:{"age":1}})
$set :有修改没有就添加一条 .update({"id":15},{$set:{"age":1}})
$unset :删除字段  .update({"id":15},{$unset :{"age":1}})
$push： 它是用来对Array (list)数据类型进行 增加 新元素的.update({"id":15},{$push:{"list":1}})
$pull :删除满足条件的数组元素 .update({"id":15},{$pull :{"list":1}})
 $pop 指定删除Array中的第一个 或 最后一个 元素update({"id":15},{$pop :{"list":1}}) 
```