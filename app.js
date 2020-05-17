const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}
let port = 8080;
const server = http.createServer(requestListener);
server.listen(port, function() {
    console.log("Info: To view your app, open this link in your browser: http://localhost:" + port);
});