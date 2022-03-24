import Mock from 'mockjs'

// 图表数据
export default {
  getStatisticalData: () => {
    return {
      code: 20000,
      data: {
        // 饼图
        pieData: [
          {
            value: Mock.Random.natural(10000, 100000),
            name: '城居养老'
          },
          {
            value: Mock.Random.natural(10000, 100000),
            name: '城职养老'
          },
          {
            value: Mock.Random.natural(10000, 100000),
            name: '工伤保险'
          },
          {
            value: Mock.Random.natural(10000, 100000),
            name: '机关养老'
          },
          {
            value: Mock.Random.natural(10000, 100000),
            name: '失业保险'
          }
        ]
      }
    }
  }
}
