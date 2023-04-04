const express = require("express");
const app = express();
var cors = require("cors");
const connection = require("./db/config");
const router = require("./router/data.model");
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(3001, () => {
  console.log("listening on port 3001");
  connection();
});
