<<<<<<< 73191c269cff8e08cff6d86bdf60397ea52279e3
const mongoose = require('mongoose')
const express = require('express')
const http = require("http")
const app = express()

const User = require('./User/user')
app.use(express.static('static'))


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
})

app.get('/User', function(req, res) {
  res.end(JSON.stringify(User))
})

let server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
=======
/**
 * Created by shenalfred on 17/2/5.
 */
const express = require("express")
const app = express()

let server = app.listen(3000, function() {

  console.log("服务器运行在端口:" + server.address().port)

})
>>>>>>> server