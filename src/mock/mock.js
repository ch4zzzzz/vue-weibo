import Mock from 'mockjs'
import api from '@/request-api/api'

Mock.mock(api.login, {
  'success': true,
})

Mock.mock(api.getPostByid, {
  'success': true,
  'post': {
    id: "123456",
    name: '@cname',
    username: '@string(8, 8)',
    content: "@cparagraph(1, 3)",
    time: String("@integer(13, 13)")
  }
})