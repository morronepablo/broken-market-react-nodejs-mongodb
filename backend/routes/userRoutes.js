const express = require("express");
const {
  register,
  login,
  activateUser,
  forgotPassword,
} = require("../controller/authController");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/activate").post(activateUser);
router.route("/forgotPassword").post(forgotPassword);

module.exports = router;
