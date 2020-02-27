import Mock from 'mockjs'
import '@/mock/extend'

var projectArr = [{
  key: '0',
  name: '张三',
  age: '32',
  address: '信阳市',
}, {
  key: '1',
  name: '李四',
  age: '26',
  address: '福州市',
},
{
  key: '2',
  name: '琬冬',
  age: '19',
  address: '金昌市',
}, {
  key: '3',
  name: '赵六',
  age: '24',
  address: '冀州市',
},
{
  key: '4',
  name: '桃菲',
  age: '24',
  address: '大同市',
}, {
  key: '5',
  name: '蕾格',
  age: '27',
  address: '齐齐哈尔市',
},
{
  key: '6',
  name: '花洁',
  age: '35',
  address: '大同市',
}, {
  key: '7',
  name: '桃月',
  age: '33',
  address: '双城市',
},
{
  key: '8',
  name: '珍嘉',
  age: '32',
  address: '大同市',
}, {
  key: '9',
  name: '李四',
  age: '30',
  address: '上海市',
},
{
  key: '10',
  name: '琛梦',
  age: '32',
  address: '淮南市',
}, {
  key: '11',
  name: '怡杉',
  age: '28',
  address: '晋江市',
},
{
  key: '12',
  name: '海荣',
  age: '32',
  address: '张掖市',
}, {
  key: '13',
  name: '浩广',
  age: '28',
  address: '北京市',
}]


Mock.mock('/project', 'get', () => {
  return projectArr
})

export {projectArr}


