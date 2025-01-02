var http = require("http")
var url = require("url")
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type':'text/html'})
    var q = url.parse(req.url, true).query;
    var a=q.a
    var b=q.b;
    a=parseInt(a);
    b=parseInt(b);
    var c = a+b;
    res.write("the answer is " + c);
    res.end()
}).listen(8080)
