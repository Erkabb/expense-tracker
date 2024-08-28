const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { logger } = require("./middlewares/logger");
const userRoutes = require("./routes/user-router");
dotenv.config();
const PORT = process.env.PORT; //zuwhun ajillaj bga uyd handaj blno
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger());

// app.get("/users", (req, res) => {
//   console.log("Succesfull");
//   res.json({ message: "get" });
// });

// app.post("/users", (req, res) => {
//   console.log("Succesfull");
// });
// app.delete("/users", (req, res) => {
//   console.log("user is deleted successfully");
// });

// app.put("/users", (req, res) => {
//   console.log("user is updated successfully");
// });

// app.get("/category", (req, res) => {
//   console.log("Succesfull");
// });

// app.post("/category", (req, res) => {
//   console.log("Succesfull");
// });
// app.delete("/category", (req, res) => {
//   console.log("user is deleted successfully");
// });

// app.put("/category", (req, res) => {
//   console.log("user is updated successfully");
// });

app.use("/users", userRoutes);
fff;

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
