# Post
## 一篇博文包含的数据
```Javascript
user: {
  name: String,
  uid: String, // 数字组成的字符串
  avatar: String, // url
},
post: {
  pid: String, // 博文ID
  content: String, // 正文
  time: String, // 发布时间
  photos: Array, // 图片
  editable: Boolean, // 是否可编辑
  hasReference: Boolean, // 是否是转发的微博
  like: {
    num: Number, // 点赞数
    list: Array,
  },
  comment: {
    num: Number, // 评论数
    list: Array,
  },
  repost: {
    num: Number, //转发数
    list: Array,
  },
  referenceList: [
    {
      uid: String,
      name: String,
      content: String
    }
  ],
  referenceOrign: {
    uid: String,
    name: String,
    pid: String
  }
}
```
## 转发微博的存储逻辑
如下所示的转发链：
A -> B -> C
C是原微博，数据存储在referenceOrign
B是转发链上的微博，存储在referenceList
A是当前微博
## 点赞、评论、转发的存储
与博文存储在一起，预览时不发送具体数据，只发送点赞评论转发数