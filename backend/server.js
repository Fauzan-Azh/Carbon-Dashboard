const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Contoh endpoint
app.get("/ping", (req, res) => {
  res.json({ message: "Hello world! " });
});

app.listen(5000, () => console.log("Backend berjalan di http://localhost:5000"));
