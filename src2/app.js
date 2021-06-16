require("dotenv").config();

const express = require("express"); // express module usage
const app = express(); // express app instance
const path = require("path"); // project path
const PORT = process.env.PORT || 3001; // app port based on environment variable

app.use(express.static(path.resolve(__dirname, "../public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setting the first route response (json format)
app.use("/", (req, res) => res.json({ clave: "con el server" }));

// start app listener
app.listen(PORT, () => {
  console.log("running integrador on port: " + PORT);
});
