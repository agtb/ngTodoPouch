var app = require(__dirname + '/app');
//console.log(JSON.stringify(process.env));
var port = process.argv[2] || 3000;
app.listen(port);
console.log('listening to port ' + port);
