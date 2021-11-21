const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const posts = require("../routes/routes");

app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is up running to the port ${port}`));
