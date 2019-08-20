import Mock from 'mockjs'
import api from '@/request-api/api'

Mock.mock('/api/login', 'post', {
  'success': true,
  'user': {
    'uid': '@string("number", 8, 8)',
    'name': '@cname',
    'avatar': 'https://wx2.sinaimg.cn/mw690/006h0M0Tgy1g3g5wkj83aj31ab1xg4qs.jpg'
  },
  'token': "dsafghfjhhgf"
})

// Mock.mock(api.getPostByid, {
//   'success': true,
//   'post': {

//   }
// })

Mock.mock('/api/following-posts', 'get', {
  'success': true,
  'posts|15-20': [{
    pid: '@string("number", 8, 8)',
    content: '@cparagraph(1, 3)',
    time: '@string("number", 12, 12)',
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
      name: '@cname',
      uid: String('@integer(8, 8)'),
      avatar: 'https://wx2.sinaimg.cn/mw690/006h0M0Tgy1g3g5wkj83aj31ab1xg4qs.jpg'
    },
    hasReference: '@boolean',
    referenceList: [
      {
        uid: "1234556",
        name: "@cname",
        content: '@csentence'
      }
    ],
    referenceOrign: {
      uid: "1234",
      name: "@cname",
      content: '@csentence',
      pid: "1234"
    }
  }]
})

Mock.mock('/api/hot-posts', 'get', {
  'success': true,
  'posts|15-20': [{
    content: '@cparagraph(1, 3)',
    time: '@string("number", 12, 12)',
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
      name: '@cname',
      uid: String('@integer(8, 8)'),
      avatar: 'https://wx2.sinaimg.cn/mw690/006h0M0Tgy1g3g5wkj83aj31ab1xg4qs.jpg'
    }
  }]
})

// 发布新微博
Mock.mock('/api/post', 'post', {
  'success': true
})

// 点赞
Mock.mock('/api/likingPost', 'post', {
  'success': true
})

Mock.mock('/api/messages', 'get', {
  'messageSet': [
    {
      'sender': {
        'uid': '12345678',
        'name': 'default_sender'
      },
      'messages': [
        {
          content: "我来了",
          time: "1566216347709"
        },
        {
          content: "走了",
          time: "1566216747709"
        }
      ]
    }
  ]

})