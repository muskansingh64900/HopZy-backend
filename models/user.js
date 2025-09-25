const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone_number: { type: String, unique: true, sparse: true },
  password: { type: String }, // plain text for now
  profile_picture: { type: String, default: null },
  city: { type: String, default: null },
  gender: { type: String, enum: ["Male", "Female", "Other"], default: null }, // accepts capitalized
  age_group: { type: Number, min: 13, default: null }, // flexible age above 13
  travel_interests: { type: [String], default: [] },
  signup_method: { type: String, enum: ["email", "phone", "google"], required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  is_verified: { type: Boolean, default: false },
  status: { type: String, enum: ["active", "inactive", "banned"], default: "active" }
});

// Auto-update updated_at on save
userSchema.pre("save", function(next) {
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model("User", userSchema);
