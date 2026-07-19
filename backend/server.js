const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db.js");
const expenseRoutes = require("./routers/expenseRoutes.js");


dotenv.config();


connectDB();

const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/expenses", expenseRoutes);


app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Expense Tracker API is running 🚀",
  });
});


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});