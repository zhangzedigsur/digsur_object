import Mock from 'mockjs'
// import '@/mock/extend'
import {projectArr} from '../project'


Mock.mock('/edit', 'post', ({body}) => {
  let result = {}
  let editData = {}
  let porjectArrNew = projectArr
  editData = JSON.parse(body)
  projectArr.forEach((item, count) => {
    if (item.key == editData.key) {
        porjectArrNew.splice(count, 1, editData);
    }
  })

  if (!editData.name || !editData.age || !editData.address) {
    result.code = -1
    result.message = '修改失败'
  } else {
    result.code = 0
    result.message = '修改成功'
    result.data = porjectArrNew
  }
  return result
})