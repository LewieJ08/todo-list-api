const express = require("express");
const connectDB = require("./config/db")
const mwLogger = require("./middleware/logger");
const mwErrorHandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();
const app = express();
connectDB();

app.use(express.json());
app.use(mwLogger);
app.use(mwErrorHandler);
app.use("/users", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});

