const express = require("express");
const app = express();

app.use(express.json())

const db = require('./models')

// Routers
const postRouter = require('./routes/Posts')
app.use('/api/posts', postRouter)

db.sequelize.sync().then(() => {
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
  });
})

