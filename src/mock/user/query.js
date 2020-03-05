import Mock from 'mockjs'
import {projectArr} from '../project'


Mock.mock('/query', 'post', ({body}) => {
  let result = {}
  let queryData = {}
  let porjectArrNew = []
  queryData = JSON.parse(body)
  projectArr.forEach((item, count) => {
    if (item.name.indexOf(queryData.name) != -1 && item.address.indexOf(queryData.address) != -1 && (item.age<=queryData.max&&item.age>=queryData.min)) {
        porjectArrNew.push(item)
    }
  })
    result.code = 0
    result.message = '查询成功'
    result.data = porjectArrNew
  return result
})