const express = require("express");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");

const PORT = 3333;

const app = express();

app.set("trust proxy", 1);

app.use(morgan("dev"));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

require("./api")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () =>
  console.log(chalk.green("✓-- ") + `App is running at port: ${PORT}`)
);
