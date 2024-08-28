const { Router } = require("express");
const { getAllUser, createUser } = require("../controller/user-controller");

const router = Router();
router.route("/").get(getAllUser).post(createUserr);
module.exports = router;
