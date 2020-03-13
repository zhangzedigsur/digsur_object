import Mock from 'mockjs'
import {projectArr} from '../project'


Mock.mock('/query', 'post', ({body}) => {
  let result = {}
  let queryData = {}
  let porjectArrNew = []
  let nameBool = false;
  let tiemBool = false;
  let addressBool = false;
  let typeBool = false;
  let ageBool = false;
  queryData = JSON.parse(body)
  projectArr.forEach((item, count) => {
    if(item.name.indexOf(queryData.name) != -1 ){
      nameBool = true
    }else{
      nameBool = false
    }
    if(item.type.indexOf(queryData.type) != -1){
      typeBool = true
    }else{
      typeBool = false
    }
    if(item.address.indexOf(queryData.address) != -1){
      addressBool = true
    }else{
      addressBool = false
    }
    if(queryData.max && queryData.min && queryData.max !== '' && queryData.min !== ''){
      if(item.age<=queryData.max&&item.age>=queryData.min){
        ageBool = true
      }else{
        ageBool = false
      }
    }else{
      ageBool = true
    }

    if(queryData.queryTime && queryData.queryTime.length > 0){
      if(item.StartTime>=queryData.queryTime[0]&&item.EndTime<=queryData.queryTime[1]){
        tiemBool = true
      }else{
        tiemBool = false
      }
    }else{
      tiemBool = true
    }
    

    
    // if (item.name.indexOf(queryData.name) != -1 && queryData.type.indexOf(item.type) != -1 && item.address.indexOf(queryData.address) != -1 && (item.age<=queryData.max&&item.age>=queryData.min)
    // && (item.StartTime>=queryData.queryTime[0]&&item.EndTime<=queryData.queryTime[1])) {
    //     porjectArrNew.push(item)
    // }
      if (nameBool && typeBool && addressBool && ageBool && tiemBool) {
          porjectArrNew.push(item)
      }
  })
    result.code = 0
    result.message = '查询成功'
    result.data = porjectArrNew
  return result
})