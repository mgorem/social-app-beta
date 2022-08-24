const express = require("express");
const app = express();

const db = require('./models')

db.sequelize.sync().then(() => {
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
  });
})

