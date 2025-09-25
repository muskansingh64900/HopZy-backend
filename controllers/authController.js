// // // // const User = require('../models/user');

// // // // exports.signup = async (req, res) => {
// // // //     const { name, email, password } = req.body;

// // // //     try {
// // // //         const existingUser = await User.findOne({ email });
// // // //         if (existingUser) {
// // // //             return res.status(400).json({ message: 'User already exists' });
// // // //         }

// // // //         const user = new User({ name, email, password });
// // // //         await user.save();

// // // //         res.status(201).json({ message: 'User created successfully', user });
// // // //     } catch (err) {
// // // //         console.error(err);
// // // //         res.status(500).json({ message: 'Server error' });
// // // //     }
// // // // };



// // // //authController.js


// // // const User = require('../models/user');
// // // const bcrypt = require('bcryptjs');
// // // const jwt = require('jsonwebtoken');

// // // exports.signup = async (req, res) => {
// // //   const { name, email, password } = req.body;
// // //   if (!name || !email || !password) return res.status(400).json({ message: 'Provide all fields' });

// // //   try {
// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser) return res.status(400).json({ message: 'User already exists' });

// // //     const hashedPassword = await bcrypt.hash(password, 10);
// // //     const user = new User({ name, email, password: hashedPassword });
// // //     await user.save();

// // //     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
// // //     res.status(201).json({ message: 'User created', token, user: { _id: user._id, name, email } });
// // //   } catch (err) {
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // };

// // // exports.login = async (req, res) => {
// // //   const { email, password } = req.body;
// // //   if (!email || !password) return res.status(400).json({ message: 'Provide email and password' });

// // //   try {
// // //     const user = await User.findOne({ email });
// // //     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

// // //     const isMatch = await bcrypt.compare(password, user.password);
// // //     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

// // //     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
// // //     res.json({ message: 'Login successful', token, user: { _id: user._id, name: user.name, email: user.email } });
// // //   } catch (err) {
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // };









// // // backend/controllers/authController.js

// // const User = require('../models/user');

// // // SIGNUP
// // exports.signup = async (req, res) => {
// //   const { name, email, password } = req.body;
// //   if (!name || !email || !password)
// //     return res.status(400).json({ message: 'Provide all fields' });

// //   try {
// //     // Check if user already exists
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser)
// //       return res.status(400).json({ message: 'User already exists' });

// //     // Save password as plain text
// //     const user = new User({ name, email, password });
// //     await user.save();

// //     res.status(201).json({
// //       message: 'User created successfully',
// //       user: { _id: user._id, name, email, password }
// //     });
// //   } catch (err) {
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };

// // // LOGIN
// // exports.login = async (req, res) => {
// //   const { email, password } = req.body;
// //   if (!email || !password)
// //     return res.status(400).json({ message: 'Provide email and password' });

// //   try {
// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

// //     // Direct comparison for plain text password
// //     if (password !== user.password)
// //       return res.status(400).json({ message: 'Invalid credentials' });

// //     res.json({
// //       message: 'Login successful',
// //       user: { _id: user._id, name: user.name, email: user.email, password: user.password }
// //     });
// //   } catch (err) {
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };



// // backend/controllers/authController.js

// const User = require('../models/user');

// // // SIGNUP
// // exports.signup = async (req, res) => {
// //   let { name, email, password } = req.body;
// //   if (!name || !email || !password)
// //     return res.status(400).json({ message: 'Provide all fields' });

// //   try {
// //     // Normalize email
// //     email = email.trim().toLowerCase();
// //     password = password.trim();

// //     // Check if user already exists
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser)
// //       return res.status(400).json({ message: 'User already exists' });

// //     // Save password as plain text
// //     const user = new User({ name, email, password });
// //     await user.save();

// //     res.status(201).json({
// //       message: 'User created successfully',
// //       user: { _id: user._id, name, email, password }
// //     });
// //   } catch (err) {
// //     console.error("Signup error:", err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };






// // const User = require("../models/user");





// // // SIGNUP
// // exports.signup = async (req, res) => {
// //   let { full_name, email, phone_number, password, city, gender, age_group, travel_interests, signup_method } = req.body;

// //   if (!full_name || !email || !password || !signup_method)
// //     return res.status(400).json({ message: "Provide full_name, email, password, and signup_method" });

// //   try {
// //     email = email.trim().toLowerCase();

// //     // Check if email already exists
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser)
// //       return res.status(400).json({ message: "User already exists with this email" });

// //     // Optional: check if phone already exists
// //     if (phone_number) {
// //       const existingPhone = await User.findOne({ phone_number });
// //       if (existingPhone)
// //         return res.status(400).json({ message: "Phone number already registered" });
// //     }

// //     const user = new User({
// //       full_name,
// //       email,
// //       phone_number,
// //       password, // plain for now
// //       city,
// //       gender,
// //       age_group,
// //       travel_interests,
// //       signup_method
// //     });

// //     await user.save();

// //     res.status(201).json({
// //       message: "User created successfully",
// //       user
// //     });
// //   } catch (err) {
// //     console.error("Signup error:", err);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // };





// // // // SIGNUP
// // // exports.signup = async (req, res) => {
// // //   let { name, email, password } = req.body;
// // //   if (!name || !email || !password)
// // //     return res.status(400).json({ message: "Provide all fields" });

// // //   try {
// // //     // Normalize
// // //     email = email.trim().toLowerCase();
// // //     password = password.trim();

// // //     // Check if user already exists
// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser)
// // //       return res.status(400).json({ message: "User already exists" });

// // //     // Save plain password (⚠️ testing only)
// // //     const user = new User({ name, email, password });
// // //     await user.save();

// // //     res.status(201).json({
// // //       message: "User created successfully",
// // //       user: { _id: user._id, name, email, password } // sending password back (only for now)
// // //     });
// // //   } catch (err) {
// // //     console.error("Signup error:", err);
// // //     res.status(500).json({ message: "Server error" });
// // //   }
// // // };







// // // LOGIN
// // exports.login = async (req, res) => {
// //   let { email, password } = req.body;
// //   if (!email || !password)
// //     return res.status(400).json({ message: 'Provide email and password' });

// //   try {
// //     // Normalize email and trim password
// //     email = email.trim().toLowerCase();
// //     password = password.trim();

// //     console.log("Login attempt:", { email, password }); // debug

// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

// //     if (password !== user.password)
// //       return res.status(400).json({ message: 'Invalid credentials' });

// //     res.json({
// //       message: 'Login successful',
// //       user: { _id: user._id, name: user.name, email: user.email, password: user.password }
// //     });
// //   } catch (err) {
// //     console.error("Login error:", err);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };










const User = require("../models/user");

// SIGNUP
exports.signup = async (req, res) => {
  let { 
    full_name, 
    email, 
    phone_number, 
    password, 
    city, 
    gender, 
    age_group, 
    travel_interests, 
    signup_method 
  } = req.body;

  if (!full_name || !email || !password || !signup_method) {
    return res.status(400).json({ message: "Provide full_name, email, password, and signup_method" });
  }

  try {
    email = email.trim().toLowerCase();

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    // Optional: check if phone already exists
    if (phone_number) {
      const existingPhone = await User.findOne({ phone_number });
      if (existingPhone) {
        return res.status(400).json({ message: "Phone number already registered" });
      }
    }

    const user = new User({
      full_name,
      email,
      phone_number,
      password, // ⚠️ plain for now
      city,
      gender,
      age_group,
      travel_interests,
      signup_method
    });

    await user.save();

    res.status(201).json({
      message: "User created successfully",
      user
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// // LOGIN
// exports.login = async (req, res) => {
//   let { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "Provide email and password" });
//   }

//   try {
//     email = email.trim().toLowerCase();
//     password = password.trim();

//     console.log("Login attempt:", { email, password }); // debug

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     if (password !== user.password) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     res.json({
//       message: "Login successful",
//       user: {
//         _id: user._id,
//         full_name: user.full_name,
//         email: user.email,
//         phone_number: user.phone_number,
//         password: user.password // ⚠️ plain for now
//       }
//     });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };








// LOGIN
exports.login = async (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Provide email and password" });
  }

  try {
    email = email.trim().toLowerCase();
    password = password.trim();

    console.log("Login attempt:", { email, password });

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user: {
        _id: user._id,
        full_name: user.full_name,
        email: user.email,
        phone_number: user.phone_number,
        password: user.password, // ⚠️ plain for now
        profile_picture: user.profile_picture,
        city: user.city,
        gender: user.gender,
        age_group: user.age_group,
        travel_interests: user.travel_interests,
        signup_method: user.signup_method,
        created_at: user.created_at,
        updated_at: user.updated_at,
        is_verified: user.is_verified,
        status: user.status
      }
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
