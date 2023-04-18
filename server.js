const express = require("express");
const app = express();
const cors = require("cors");
const resources = require("./resources");
const PORT = process.env.PORT || 8000;

app.use(cors());
// app.use(express.static("public"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:keyword", (req, res) => {
  const keyword = req.params.keyword.toLowerCase();

  // filter resources array and return items that match search

  const matches = resources.filter((obj) => obj.keywords.includes(keyword));

  if (matches.length) {
    res.json(matches);
  } else {
    res
      .status(404)
      .json({ error: `No resources found with the '${keyword}' keyword.` });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
