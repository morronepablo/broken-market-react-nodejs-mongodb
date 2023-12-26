const express = require("express");
const {
  register,
  login,
  activateUser,
} = require("../controller/authController");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/activate").post(activateUser);

module.exports = router;
