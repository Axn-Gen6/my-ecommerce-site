const http = require('http');
const url = require('url');
const fs = require('fs');
const path = re

var server = http.createServer(function (req, res) {
  //var q = url.parse(adr, true);
  //var txt = q.fname + " " + q.lname;
  var q = url.parse(req.url, true);
  let fillePath = "." +  req.url;
  if(filePate === "./") filePate = "./index.html";

  fs.readFile("./index.html",function (err,htmlDoc){
    if(err){
      res.writeHead(404,{'Content-Typs' : 'text/html'});
      return res.end(" 404 File Not Found!!!")
    }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(htmlDoc)
  res.end();
  })

})

server.listen(8080)