import Mock from 'mockjs'
import ldrkda from './part/ldrkdaRequest.js'
import sbjffx from './part/sbjffxRequest.js'

// 设置200-2000毫秒延时请求数据
Mock.setup({
  timeout: '200-2000'
})

// 数字滚动数据
Mock.mock(/\/ldrkda\/getData/, 'post', ldrkda.getStatisticalData)
Mock.mock(/\/sbjffx\/getData/, 'post', sbjffx.getStatisticalData)
