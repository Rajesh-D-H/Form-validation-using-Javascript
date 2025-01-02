var http = require("http")
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type':'text/html'})
    res.write("<body bgcolor='orange'>");
    res.write('hello world!');
    res.write("</body>");
    res.end("<h1> Good morning </h1>");
    console.log("connecting");
}).listen(8080)

