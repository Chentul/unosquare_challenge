const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
const serverPort = 9000;
const server = app.listen(serverPort, () => {
  const HOST = server.address().address;
  const PORT = server.address().port;
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
