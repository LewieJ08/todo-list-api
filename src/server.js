const express = require("express");
const loggerMiddleware = require("./middleware/logger");
const userRoutes = require("./routes/userRoutes")

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(loggerMiddleware);
app.use("/users", userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

