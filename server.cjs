const express = require("express");
const path = require("path");

const PORT = 3000;
const STATUS_CODES = {
  SUCCESS: 200,
};

const app = express();

app.use(express.static("./dist"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));

  res.status(STATUS_CODES.SUCCESS);
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
