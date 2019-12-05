const http= require("http");
const expr = require("express");
const bp = require("body-parser");
const server = expr();
server.use(expr.static(__dirname + "/index"));

server.use(bp.urlencoded({extended:false}));
server.use(bp.json());

let allowCrossDomain = function(req, resp, next) {
  resp.header("Access-Control-Allow-Origin","*");
  resp.header("Access-Control-Allow-Headers","*");
  next();
}
server.use(allowCrossDomain);

server.post("/", (req, resp) => {
 	console.log(req.body)
  resp.send(req.body);
});

server.listen(3001);
