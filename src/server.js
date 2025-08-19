const express = require("express");
const loggerMiddleware = require("./middleware/logger");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

