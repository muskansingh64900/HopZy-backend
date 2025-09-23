// // const User = require('../models/user');

// // exports.signup = async (req, res) => {
// //     const { name, email, password } = req.body;

// //     try {
// //         const existingUser = await User.findOne({ email });
// //         if (existingUser) {
// //             return res.status(400).json({ message: 'User already exists' });
// //         }

// //         const user = new User({ name, email, password });
// //         await user.save();

// //         res.status(201).json({ message: 'User created successfully', user });
// //     } catch (err) {
// //         console.error(err);
// //         res.status(500).json({ message: 'Server error' });
// //     }
// // };



// //authController.js


// const User = require('../models/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// exports.signup = async (req, res) => {
//   const { name, email, password } = req.body;
//   if (!name || !email || !password) return res.status(400).json({ message: 'Provide all fields' });

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
//     res.status(201).json({ message: 'User created', token, user: { _id: user._id, name, email } });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) return res.status(400).json({ message: 'Provide email and password' });

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
//     res.json({ message: 'Login successful', token, user: { _id: user._id, name: user.name, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };









// backend/controllers/authController.js

const User = require('../models/user');

// SIGNUP
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: 'Provide all fields' });

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'User already exists' });

    // Save password as plain text
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      message: 'User created successfully',
      user: { _id: user._id, name, email, password }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'Provide email and password' });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Direct comparison for plain text password
    if (password !== user.password)
      return res.status(400).json({ message: 'Invalid credentials' });

    res.json({
      message: 'Login successful',
      user: { _id: user._id, name: user.name, email: user.email, password: user.password }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
