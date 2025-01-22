import express from "express";

const app = express();

// Ensure PORT is a number
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

// Define a test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start the server and bind to 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
