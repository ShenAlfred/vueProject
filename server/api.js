/**
 * Created by admin on 2017/2/28.
 */
const User = require('./User/user')
const Grids = require('./Grids/grids')
const Departments = require('./Department/department')
const Departments1 = require('./Department/department1')
const Departments2 = require('./Department/department2')

function queryApi(app) {
  app.get('/', function(req, res) {
    res.end("Hello World!!!")
  })

  app.get('/User', function(req, res) {
    res.end(JSON.stringify(User))
  })

  app.get('/Grids', (req, res) => {
    res.end(JSON.stringify(Grids))
  })

  app.get('/Department', (req, res) => {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end(JSON.stringify(Departments))
  })

  app.get('/Department1', (req, res) => {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(req.query.id == 1) {
      res.end(JSON.stringify(Departments1))
    }else if(req.query.id == 2) {
      res.end(JSON.stringify(Departments2))
    }
  })
}

exports = module.exports = queryApi;
