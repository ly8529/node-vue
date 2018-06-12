var express = require('express');
var app = express();
var fs = require("fs");
//创建一个webpage对象
var page = require('webpage').create();

 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://localhost:8081/", host, port)
 
});
app.get('/', function (req, res) {
	var filePath = "../test/index.html";
	var str = fs.readFileSync(filePath,"utf-8");
    res.send(str);
});

/*// 打开页面
expressApp.post('/screenshot',urlencodedParser, function (req, res) {
	var body = {};
	var wd = req.body.query;
	for(let i = 0 ;i<5;i++){
		pn = i*10;
		var url = 'https://www.baidu.com/s?wd='+wd+'&pn='+pn;
		page.open('', function(status) {
		  // 输出状态
		  console.log("Status: " + status);
		  if(status === "success") {
		    // 如果状态为success，将整个page保存为hfly.jpg（也可以是png，pdf, gif）
		    page.render('wd_'+i+'.jpg');
		  }
  		phantom.exit();
		});
	}
    res.writeHead(200);
    res.end();
});*/

