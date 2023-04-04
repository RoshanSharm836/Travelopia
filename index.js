const express = require("express");
const app = express();
const connection = require("./db/config");
const router = require("./router/data.model");
var cors = require("cors");
var path = require("path");

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.listen(3001, () => {
  console.log("listening on port 3001");
  connection();
});
