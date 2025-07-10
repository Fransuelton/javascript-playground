const express = require("express");
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
  res.send("Home Route");
});

app.get("/about", (req, res) => {
  res.send("About Route");
});

app.get("/contact", (req, res) => {
  res.send({
    name: "Fransuelton F.",
    email: "contato@fransuelton.dev",
  });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})