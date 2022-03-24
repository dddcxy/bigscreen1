import Mock from 'mockjs'

// 图表数据
export default {
  getStatisticalData: () => {
    return {
      code: 20000,
      data: {
        // 饼图
        numStatisticsData: [
          {
            title: '档案总存档',
            num: Mock.Random.natural(10000, 100000),
            tb: Mock.Random.float(-100, 100, 0, 2),
            unit: '家'
          },
          {
            title: '档案转出量',
            num: Mock.Random.natural(10000, 100000),
            tb: Mock.Random.float(-100, 100, 0, 2),
            unit: '家'
          },
          {
            title: '档案借阅量',
            num: Mock.Random.natural(10000, 100000),
            tb: Mock.Random.float(-100, 100, 0, 2),
            unit: '家'
          },
          {
            title: '档案接受量',
            num: Mock.Random.natural(10000, 100000),
            tb: Mock.Random.float(-100, 100, 0, 2),
            unit: '家'
          }
        ],
        sexData: [
          {
            name: '男性',
            value: Mock.Random.natural(10000, 10000000)
          },
          {
            name: '女性',
            value: Mock.Random.natural(10000, 10000000)
          }
        ],
        cdxzfxData: [
          {
            name: '个人存档',
            value: Mock.Random.natural(10000, 10000000)
          },
          {
            name: '企业存档',
            value: Mock.Random.natural(10000, 10000000)
          }
        ],
        cdmzfxData: [
          {
            name: '汉族',
            value: Mock.Random.natural(10000, 10000000)
          },
          {
            name: '少数民族',
            value: Mock.Random.natural(10000, 10000000)
          }
        ]
        // 柱状图
        // userData: [
        //   {
        //     date: '周一',
        //     new: Mock.Random.integer(1, 100),
        //     active: Mock.Random.integer(100, 1000)
        //   },
        //   {
        //     date: '周二',
        //     new: Mock.Random.integer(1, 100),
        //     active: Mock.Random.integer(100, 1000)
        //   },
        //   {
        //     date: '周三',
        //     new: Mock.Random.integer(1, 100),
        //     active: Mock.Random.integer(100, 1000)
        //   },
        //   {
        //     date: '周四',
        //     new: Mock.Random.integer(1, 100),
        //     active: Mock.Random.integer(100, 1000)
        //   },
        //   {
        //     date: '周五',
        //     new: Mock.Random.integer(1, 100),
        //     active: Mock.Random.integer(100, 1000)
        //   },
        //   {
        //     date: '周六',
        //     new: Mock.Random.integer(1, 100),
        //     active: Mock.Random.integer(100, 1000)
        //   },
        //   {
        //     date: '周日',
        //     new: Mock.Random.integer(1, 100),
        //     active: Mock.Random.integer(100, 1000)
        //   }
        // ],
        // // 折线图
        // orderData: {
        //   date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
        //   data: List
        // },
        // tableData: [
        //   {
        //     name: 'ES6',
        //     todayBuy: Mock.Random.float(100, 1000, 0, 2),
        //     monthBuy: Mock.Random.float(3000, 5000, 0, 2),
        //     totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
        //   },
        //   {
        //     name: '小程序',
        //     todayBuy: Mock.Random.float(100, 1000, 0, 2),
        //     monthBuy: Mock.Random.float(3000, 5000, 0, 2),
        //     totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
        //   },
        //   {
        //     name: 'Vue',
        //     todayBuy: Mock.Random.float(100, 1000, 0, 2),
        //     monthBuy: Mock.Random.float(3000, 5000, 0, 2),
        //     totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
        //   },
        //   {
        //     name: 'springboot',
        //     todayBuy: Mock.Random.float(100, 1000, 0, 2),
        //     monthBuy: Mock.Random.float(3000, 5000, 0, 2),
        //     totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
        //   },
        //   {
        //     name: 'React',
        //     todayBuy: Mock.Random.float(100, 1000, 0, 2),
        //     monthBuy: Mock.Random.float(3000, 5000, 0, 2),
        //     totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
        //   },
        //   {
        //     name: 'Redis',
        //     todayBuy: Mock.Random.float(100, 1000, 0, 2),
        //     monthBuy: Mock.Random.float(3000, 5000, 0, 2),
        //     totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
        //   }
        // ]
      }
    }
  }
}
