const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("helppppppppp");
})

app.listen(port, () => {
  console.log(`server running on http://127.0.0.1:${port}`);
})