import Mock from 'mockjs'
// import '@/mock/extend'
import {projectArr} from '../project'


Mock.mock('/delete', 'post', ({body}) => {
  let result = {}
  let delData = JSON.parse(body)
  let porjectArrNew = []
  // let key = body
  porjectArrNew = delData.data.filter(item => item.key != delData.key)
    result.code = 0
    result.message = '删除成功'
    result.data = porjectArrNew
  return result
})