# API

## 登录

* 请求方式：`GET /token`

* body：`{username: "username", password: "password"}`

  或 `{'token': 'token'}`

* 返回示例

  ```json
  {
      'user': {
          'uid': '00000000',
          'name': 'uzi',
      	'avatar': 'https://wx2.sinaimg.cn/mw690/006h0M0Tgy1g3g5wkj83aj31ab1xg4qs.jpg'
      },
      'token': 'SFDSYFYH' // 加密了uid和时间戳的字符串
  }
  ```

## 拉取微博

* 请求方式：`GET /following-posts`

* body：

  ```json
  {
      'token': 'token',
      'beginDate': '1565613241444',
      'endDate': '1565613241444'
  }
  ```

* 返回示例

  ```json
  {
      posts: [
          {
              content: '微博正文',
              time: '1565613241444',
              'photos|1-9': [{
                  src: "https://wx4.sinaimg.cn/large/e7bf4c79gy1g5j283epadj20fa0dh0zc.jpg"
              }],
              like: {
                  num: 0
              },
              comment: {
                  num: 0
              },
              repost: {
                  num: 0
              },
              'user': {
                  name: '用户昵称',
                  uid: '00000000',
                  avatar: 'https://wx2.sinaimg.cn/mw690/006h0M0Tgy1g3g5wkj83aj31ab1xg4qs.jpg'
              },
              hasReference: true,
              referenceList: [
                  {
                      uid: "1234556",
                      name: "李四",
                      content: '转发评论'
                  }
              ],
              referenceOrign: {
                  uid: "1234",
                  name: "王五",
                  content: '原文',
                  pid: "1234"
              }
          }
      ]
  }
  ```

## 获取微博

* 请求方式：`GET /post/:pid`

* 返回示例

  ```json
  {
      content: '微博正文',
      time: '1565613241444',
      'photos|1-9': [{
          src: "https://wx4.sinaimg.cn/large/e7bf4c79gy1g5j283epadj20fa0dh0zc.jpg"
      }],
      like: {
          num: 0,
          list: [
              {
                  name: "张三",
                  uid: '00000000'
              }
          ]
      },
      comment: {
          num: 0,
          list: [
              {
                  name: "张三",
                  uid: '00000000',
                  content: '真好'
              }
          ]
      },
      repost: {
          num: 0,
          list: [
              {
                  name: "张三",
                  uid: '00000000',
                  content: '真好'
              }
          ]
      },
      'user': {
          name: '用户昵称',
          uid: '00000000',
          avatar: 'https://wx2.sinaimg.cn/mw690/006h0M0Tgy1g3g5wkj83aj31ab1xg4qs.jpg'
      },
      hasReference: true,
      referenceList: [
          {
              uid: "1234556",
              name: "李四",
              content: '转发评论'
          }
      ],
      referenceOrign: {
          uid: "1234",
          name: "王五",
          content: '原文',
          pid: "1234"
      }
  }
  ```

  



