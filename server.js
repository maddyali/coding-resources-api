const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

app.use(cors());

const resources = [
  {
    name: "Building a Simple CRUD app with Node, Express, and MongoDB",
    url: "https://zellwk.com/blog/crud-express-mongodb/",
    description:
      "A comprehensive tutorial on working with Node, Express, and MongoDB",
    keywords: [
      "node",
      "mongodb",
      "express",
      "javascript",
      "backend",
      "fullstack",
    ],
  },
];

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
