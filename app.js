const express = require("express");
const router = require("./routes");
const error = require("./Middleware/error")

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
// app.use(error)

app.listen(PORT, () => {
  console.log(`This app running on port: ${PORT}`);
});
