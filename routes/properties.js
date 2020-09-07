const express = require("express");
const router = express.Router();
// const checkAuth = require("../middleware/checkAuth");
const { signIn, signUp, updateUser, deleteUser } = require("../controller/user");

//Handling all the incoming requests
router.get("/", getProperties);
router.get("/new", getNewProperties);
router.get("/:propertyID", getProperty);
router.post("/", addProperty);
router.patch("/:propertyID", editProperty);
router.delete("/:propertyID", deleteProperty);
module.exports = router;

