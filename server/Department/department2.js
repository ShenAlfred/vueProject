/**
 * Created by admin on 2017/2/28.
 */

const Departments = {
  resCode: '0000',
  resDec: '操作成功',
  hash: 'DepChildGroupTwo',
  Departments: [
    {
      id: 11,
      name: '技术部',
      hash: 'technology',
      persons_number: 25,
      persons: [
        {
          name: '技术甲',
          job: '架构师'
        },
        {
          name: '技术已',
          job: '架构师二'
        },
        {
          name: '技术丙',
          job: '架构师三'
        },
        {
          name: '技术丁',
          job: '技术程序一'
        },
        {
          name: '技术甲甲',
          job: '技术程序二'
        },
        {
          name: '技术一一',
          job: '技术程序三'
        },
        {
          name: '技术丙丙',
          job: '技术程序四'
        },
        {
          name: '技术丙丁',
          job: '测试员二'
        },
        {
          name: '技术甲乙丙丁',
          job: '测试员一'
        },
        {
          name: '技术我勒个去',
          job: 'UI设计师'
        }
      ]
    },
    {
      id: 12,
      name: '市场部',
      hash: 'market',
      persons_number: 33,
      persons: [
        {
          name: '市场甲',
          job: '分析师'
        },
        {
          name: '市场已',
          job: '分析师二'
        },
        {
          name: '市场丙',
          job: '市场推广一'
        },
        {
          name: '市场丁',
          job: '市场推广二'
        },
        {
          name: '市场甲甲',
          job: '市场推广三'
        },
        {
          name: '市场一一',
          job: '市场销售一'
        },
      ]
    }
  ]
}

module.exports = Departments;
