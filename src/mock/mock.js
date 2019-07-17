import Mock from 'mockjs'
import api from '@/request-api/api'

Mock.mock(api.login, {
  'success': true,
})