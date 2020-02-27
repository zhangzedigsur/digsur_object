import Mock from 'mockjs'
// import '@/mock/extend'
import {projectArr} from '../project'


Mock.mock('/add', 'post', ({body}) => {
  let result = {}
  let addData = {}
  let porjectArrNew = []
  addData = JSON.parse(body)
  projectArr.forEach(i => {
    let num = Number(i.key)
    num++;
    i.key = num;
  });
  addData.key = '0'
  porjectArrNew = [addData, ...projectArr]

  if (!addData.name || !addData.age || !addData.address) {
    result.code = -1
    result.message = '添加失败'
  } else {
    result.code = 0
    result.message = '添加成功'
    result.data = porjectArrNew
  }
  return result
})