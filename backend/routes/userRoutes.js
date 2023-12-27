const express = require("express");
const {
  register,
  login,
  activateUser,
  forgotPassword,
  resetPassword,
} = require("../controller/authController");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/activate").post(activateUser);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:token").post(resetPassword);

module.exports = router;
