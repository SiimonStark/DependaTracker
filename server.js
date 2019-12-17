const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();

connectDB();

app.use(express.json({extended:false}))
app.use('/api/habitModel', require('./Api/Habit'));
const Port = process.env.Port || 3005;

app.listen(Port, () => console.log(`✅  Server Launched on Port: ${Port} 🚀`));