/**
 * Created by admin on 2017/2/28.
 */

const Departments = {
  resCode: '0000',
  resDec: '操作成功',
  hash: 'DepChildGroupOne',
  Departments: {
    name: '',
    groups: [{
      id: 11,
      name: '金融部',
      hash: 'finance',
      persons_number: 25,
      child: [
        {
          id: 1111,
          name: '风控部'
        },
        {
          id: 1112,
          name: '投资部'
        },
        {
          id: 1113,
          name: '股市证券部'
        }
      ]
    }]
  }
}

module.exports = Departments;
