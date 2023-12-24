const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "fullname is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password should be greater than 6 character"],
      select: false,
    },
    photo: {
      type: String,
      default:
        "https://res.cloudinary.com/queentech/image/upload/v1690010294/78695default-profile-picture1_dhkeeb.jpg",
    },
    storename: {
      type: String,
      unique: true,
      required: [true, "Username is required"],
      lowercase: true,
    },
    introduction: String,
    numProducts: { type: Number, default: 0 },
    bannerImage: {
      type: String,
      default:
        "https://plus.unsplash.com/premium_photo-1664302438823-41e4fe999f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passswordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
