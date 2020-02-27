import Mock from 'mockjs'
import '@/mock/user/add'
import '@/mock/user/edit'
import '@/mock/user/query'
import '@/mock/user/del'
import '@/mock/project'
import '@/mock/user/login'
import '@/mock/workplace'

// 设置全局延时
Mock.setup({
  timeout: '300-600'
})
