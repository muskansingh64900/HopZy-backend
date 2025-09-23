// // // require('dotenv').config();
// // // const express = require('express');
// // // const mongoose = require('mongoose');

// // // const app = express();
// // // app.use(express.json()); // parse JSON bodies

// // // // MongoDB Connection
// // // mongoose.connect(process.env.MONGO_URI, {
// // //     useNewUrlParser: true,
// // //     useUnifiedTopology: true
// // // })
// // // .then(() => console.log('✅ MongoDB Connected'))
// // // .catch(err => console.error('❌ MongoDB Error:', err));

// // // // Routes
// // // const authRoutes = require('./routes/auth');
// // // app.use('/api/auth', authRoutes);

// // // // Test route
// // // app.get('/', (req, res) => {
// // //     res.send('Hopzy backend running!');
// // // });

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// // const express = require("express");
// // const mongoose = require("mongoose");
// // require("dotenv").config();

// // const app = express();
// // app.use(express.json());

// // // Connect Routes
// // const authRoutes = require('./routes/auth'); // <-- add this
// // app.use('/api/auth', authRoutes);           // <-- add this

// // // MongoDB connection
// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => console.log("✅ MongoDB Connected"))
// //   .catch(err => console.error("❌ MongoDB Error:", err));

// // // Test route
// // app.get("/", (req, res) => {
// //   res.send("Backend is working ✅");
// // });

// // // Dynamic port
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));





// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // ✅ Enable JSON parsing
// app.use(express.json());

// // ✅ Enable CORS
// app.use(cors({
//   origin: "*",  // allow all origins (for now, you can restrict later)
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));

// // ✅ Routes
// const authRoutes = require("./routes/auth");
// app.use("/api/auth", authRoutes);

// // ✅ MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => console.error("❌ MongoDB Error:", err));

// // ✅ Test route
// app.get("/", (req, res) => {
//   res.send("Backend is working ✅");
// });

// // ✅ Dynamic port
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Enable JSON parsing
app.use(express.json());

// ✅ Flexible CORS: allow requests from any origin
app.use(cors({
  origin: "*",  // accept requests from any IP/domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working ✅");
});

// Dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
