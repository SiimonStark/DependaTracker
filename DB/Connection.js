const mongoose = require('mongoose');

const URI =
  "mongodb+srv://siimonstark:searchTracker@cluster0stattrack-jj5zx.mongodb.net/devTracker?retryWrites=true&w=majority";

  const connectDB = async()=> {
    try {
      await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      });
      console.log("✅  DB connected to Atlas 📡");
    }
    catch {
      console.error('🛑 Failed to connect to Atlas! ⚠️')
    }
    
  }

  module.exports = connectDB;