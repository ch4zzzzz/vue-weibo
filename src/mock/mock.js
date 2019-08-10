import Mock from 'mockjs'
import api from '@/request-api/api'

Mock.mock(api.login, {
  'success': true,
  'user': {
    'uid': '@string("number", 8, 8)',
    'name': '@cname',
    'avatar': 'https://wx2.sinaimg.cn/mw690/006h0M0Tgy1g3g5wkj83aj31ab1xg4qs.jpg'
  }
})

// Mock.mock(api.getPostByid, {
//   'success': true,
//   'post': {

//   }
// })

Mock.mock(api.getFollowingPosts, 'get', {
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

Mock.mock(api.getHotPosts, 'get', {
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