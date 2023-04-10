const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const errorHandler = require('./middlewares/errorHandler.js');
const NotFoundError = require('./errors/NotFoundError.js');
const routes = require('./routes/index.js');


var cors = require('cors')
app.use(cors());

app.use('/api', routes);


app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);


server.listen(3000, () => {
  console.log("listening on 3000");
});

