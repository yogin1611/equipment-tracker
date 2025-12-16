const express = require("express");
const cors = require("cors");

const equipmentRoutes = require("./routes/equipment");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/equipment", equipmentRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
