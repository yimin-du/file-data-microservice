var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'upload/' });
var port = process.env.PORT || 8080;
var app = express();

//app.use(multer({dest:'./uploads/'}));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.post('/upload', upload.single('file'), function(req, res) {
	var resdata = {
		filename: req.file.originalname,
		size: req.file.size
	}
	res.send(resdata);
});

app.listen(port);