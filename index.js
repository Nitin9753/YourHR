const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => console.log(err));
app.get('/', (req,res)=>{
  res.send("<h1>YourHR server</h1>");
})
// Routes
app.use('/api/users', require('./routes/userRoutes'));
