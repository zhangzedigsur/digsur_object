import Mock from 'mockjs'
import '@/mock/extend'

const user = Mock.mock({
  name: '@ADMIN',
  avatar: '@AVATAR',
  address: '@CITY',
  welcome: '@WELCOME',
  timefix: '@TIMEFIX',
  position: '@POSITION'
})

Mock.mock('/login', 'post', ({body}) => {
  let result = {}
  const {name, password} = JSON.parse(body)

  if (name !== 'zhangze' || password !== '123456') {
    result.code = -1
    result.message = '账户名或密码错误（zhangze/123456）'
  } else {
    result.code = 0
    result.message = '登录成功'
    result.data = {}
    result.data.user = user
  }
  return result
})
