# Models

## User

```json
{
    uid: String, // 数字组成的字符串
    password: String,
    name: String,
    avatar: String, // url,
    following: Array,
    followers: Array
}
```

## Post

```json
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

