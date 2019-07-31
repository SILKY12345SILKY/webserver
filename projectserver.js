const http = require('http');
function handler (req,res){
    res.writehead(200),{'contenttype':'text/plan'});
    res.write("yeah Go Webserver!!!");
    res.end();
}
const server = http.createServer();
server.listen(3000);


