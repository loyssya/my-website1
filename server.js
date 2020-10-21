const http = require ("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res)=>{    
    if (req.url == "/"){
      return fs.readFile("./HOME.html","UTF-8",(err, html)=>{
          if (err){
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            return res.end ("Internal server error");
          }
          res.writeHead(200, {"Content-Type":"text/html"});
          res.end(html);
      }) 
    }
    if(req.url.match("\.css$")){
        const cssPath = path.join(__dirname, "style_css", req.url.split("/").pop());
        const fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type":"text/css"});
        return fileStream.pipe(res);
    }
    if(req.url.match("\.(png|jpg|svg)$")){
        const fileName = req.url.split("/").pop();
        const imagePath = path.join(__dirname, "images", fileName);
        const fileStream = fs.createReadStream(imagePath); 
        res.writeHead(200, {"Content-Type":"text/"+fileName.split(".").pop()});
        return fileStream.pipe(res);
    }
    if(req.url.match("\.js$")){
        const jsPath = path.join(__dirname, "script", req.url.split("/").pop());
        const fileStream = fs.createReadStream(jsPath, "UTF-8");
        res.writeHead(200, {"Content-Type":"text/javascript"});
        return fileStream.pipe(res);
    }
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end ("No Page Found");
});

server.listen(3000, ()=> {console.log("Server running 3000")}  );