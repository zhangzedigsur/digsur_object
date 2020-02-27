import Mock from 'mockjs'
import '@/mock/extend'

var projectArr2 = [
{
  key: '1',
  name: '珍嘉',
  age: '32',
  address: '大同市',
}, {
  key: '2',
  name: '李四',
  age: '30',
  address: '上海市',
},
{
  key: '3',
  name: '琛梦',
  age: '32',
  address: '淮南市',
}, {
  key: '4',
  name: '怡杉',
  age: '28',
  address: '晋江市',
},
{
  key: '5',
  name: '海荣',
  age: '32',
  address: '张掖市',
}, {
  key: '6',
  name: '浩广',
  age: '28',
  address: '北京市',
}]


Mock.mock('/project2', 'get', () => {
  return projectArr1
})