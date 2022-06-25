const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/taskdb.json');
const middlewares = jsonServer.defaults();
const db = require('./taskdb.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);
// @ts-ignore
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

server.use(jsonServer.bodyParser)
// @ts-ignore
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});


