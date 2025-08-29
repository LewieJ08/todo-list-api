const express = require("express");
const connectDB = require("./config/db")
const mwLogger = require("./middleware/logger");
const mwErrorHandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

require("dotenv").config();
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(mwLogger);
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

app.use(mwErrorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});

