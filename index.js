const express = require('express');
const schoolRoutes = require('./routes/schoolRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/schools', schoolRoutes);
app.get("/", (req, res)=>{
    res.send("<h1>School Management Server</h1>");
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

