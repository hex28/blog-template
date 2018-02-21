var express = require('express');
var path = require('path');

app = express();

app.use(express.static(__dirname));

app.listen(8080);
console.log('server started on '+ 8080);
