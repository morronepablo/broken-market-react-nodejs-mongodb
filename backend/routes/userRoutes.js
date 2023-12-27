const express = require("express");
const {
  register,
  login,
  activateUser,
  forgotPassword,
  resetPassword,
  getUsers,
  updatePassword,
} = require("../controller/authController");

const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/activate").post(activateUser);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:token").post(resetPassword);

router.route("/").get(isAuthenticated, getUsers);

router.route("/updatePassword").put(isAuthenticated, updatePassword);

module.exports = router;
