const express = require("express");
const app = express();
const routes = require("./routes");
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json()); //parse JSON requests
app.use(express.urlencoded({ extended: true })); //parse URL-encoded requests
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
