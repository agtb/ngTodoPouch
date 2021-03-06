var argv = require('minimist')(process.argv.slice(2));
if (argv.admindb) process.env.ADMIN_URL = argv.admindb;
if (argv.userdb) process.env.USER_URL = argv.userdb;
var _ = require('underscore');
var pkg = require('./package.json');
var seaport = require('seaport');
var ports = seaport.connect('seaport.eirenerx.com', 9090);
// var client = require('upnode');
// ports.get('envdb', function(ps) {
//   client.connect(ps[0], function(remote) {
//     remote.auth('Nodejs.rox', function(db) {
//       db.get('todolists', function(err, value) {
//         _(process.env).extend(value);
//       });
//     });
//   });
// });
//


var app = require('./app');
app.listen(ports.register([pkg.name, pkg.version].join('@')));
