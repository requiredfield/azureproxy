var httpProxy = require('http-proxy'),
    config = require('./config.json');

var proxy = httpProxy.createServer({
  target: config.origin,
  changeOrigin: true,
});
proxy.on('error', function (e) { console.error(e); });

var port = process.env.port || 8000;
console.info('listening on port', port);
proxy.listen(port);
