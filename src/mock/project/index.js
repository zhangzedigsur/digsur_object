import Mock from 'mockjs'
import '@/mock/extend'

var projectArr = [{
  key: '0',
  name: '张三',
  age: '32',
  address: '信阳市',
  type:"游客",
  StartTime:"2020-03-11",
  EndTime:"2020-03-20",
}, {
  key: '1',
  name: '李四',
  age: '26',
  type:"管理员",
  address: '福州市',
  StartTime:"2020-03-11",
  EndTime:"2020-03-21",
},
{
  key: '2',
  name: '琬冬',
  age: '19',
  type:"管理员",
  address: '金昌市',
  StartTime:"2020-03-11",
  EndTime:"2020-03-28",
}, {
  key: '3',
  name: '赵六',
  age: '24',
  type:"游客",
  address: '冀州市',
  StartTime:"2020-02-11",
  EndTime:"2020-04-11",
},
{
  key: '4',
  name: '桃菲',
  age: '24',
  type:"游客",
  address: '大同市',
  StartTime:"2020-01-13",
  EndTime:"2020-03-45",
}, {
  key: '5',
  name: '蕾格',
  age: '27',
  type:"游客",
  address: '齐齐哈尔市',
  StartTime:"2020-03-11",
  EndTime:"2020-03-11",
},
{
  key: '6',
  name: '花洁',
  age: '35',
  address: '大同市',
  StartTime:"2020-03-11",
  EndTime:"2020-03-11",
}, {
  key: '7',
  name: '桃月',
  age: '33',
  type:"游客",
  address: '双城市',
  StartTime:"2020-03-11",
  EndTime:"2020-03-11",
},
{
  key: '8',
  name: '珍嘉',
  age: '32',
  type:"游客",
  address: '大同市',
  StartTime:"2020-03-11",
  EndTime:"2020-03-11",
}, {
  key: '9',
  name: '李四',
  age: '30',
  type:"游客",
  address: '上海市',
  StartTime:"2020-03-11",
  EndTime:"2020-03-11",
},
{
  key: '10',
  name: '琛梦',
  age: '32',
  type:"游客",
  address: '淮南市',
  StartTime:"2020-03-11",
  EndTime:"2020-03-11",
}, {
  key: '11',
  name: '怡杉',
  age: '28',
  type:"游客",
  address: '晋江市',
  StartTime:"2020-03-11",
  EndTime:"2020-03-11",
},
{
  key: '12',
  name: '海荣',
  age: '32',
  type:"游客",
  address: '张掖市',
  StartTime:"2020-03-11",
  EndTime:"2020-03-11",
}, {
  key: '13',
  name: '浩广',
  age: '28',
  type:"游客",
  address: '北京市',
  StartTime:"2020-03-11",
  EndTime:"2020-03-11",
}]


Mock.mock('/project', 'get', () => {
  return projectArr
})

export {projectArr}


