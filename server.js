const jsonServer = require('json-server');
const dotenv = require('dotenv');

dotenv.config();

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9090;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port: ${port}`);
});
