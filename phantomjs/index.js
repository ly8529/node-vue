//创建一个webpage对象
var page = require('webpage').create();

/*page.open('https://www.baidu.com/s?wd=%E7%BB%8F%E6%B5%8E', function(status) {
	  // 输出状态
	  console.log("Status: " + status);
	  if(status === "success") {
	    // 如果状态为success，将整个page保存为hfly.jpg（也可以是png，pdf, gif）
	    page.render('经济.jpg');
	  }
		phantom.exit();
});*/
for(var i = 0 ;i<5;i++){
	var pn = i*10;
	var url = 'https://www.baidu.com/s?wd=经济&pn='+pn;
	page.open(url, function(status) {
	  // 输出状态
	  console.log("Status: " + status);
	  if(status === "success") {
	    // 如果状态为success，将整个page保存为hfly.jpg（也可以是png，pdf, gif）
	    page.render('wd_'+i+'.jpg');
	  }
		
	});

};
phantom.exit();