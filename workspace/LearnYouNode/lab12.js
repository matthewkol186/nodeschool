var http = require('http');
var url = require('url');
var server = http.createServer(function(req, res){
    if (req.method != 'GET')
        return res.end('send me a GET\n')
        
    var parsed = url.parse(req.url, true);
    
    if(parsed.pathname === "/api/parsetime"){
        var iso = parsed.query['iso'];
        var date = new Date(iso);
        var json = {"hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()};
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(json));
    }
    else if(parsed.pathname === "/api/unixtime"){
        var iso = parsed.query['iso'];
        var date = new Date(iso);
        var json = {"unixtime": date.getTime()};
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(json))
    }
});
server.listen(Number(process.argv[2]));