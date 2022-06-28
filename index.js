const http = require("http");
//crete a server 
 const server = http.createServer(function(req,res){
    res.write("<h1>server page<h1>");
    res.write("<p>Hey Brother<p>");
    res.write(JSON.stringify({NAME:"Panda"}))
    res.write("<h2>How are you?<h2>")
    res.end("<h1>Server end<h1>");
})
server.listen(4000)