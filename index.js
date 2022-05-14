const express = require("express");
const cors = require("cors");
const messagesRouter = require("./router/router"); //look here
const bodyParser = require("body-parser");
const utilsRouter = require("./router/utilsRouter");

const router = require("./router/router");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/messages", router);
app.use("/messages", messagesRouter);
app.use("/utils", utilsRouter);
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
