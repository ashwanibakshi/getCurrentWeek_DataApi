const express        = require("express");
const demoController = require("../controllers/demoController");

const router         = express.Router();


router.get('/showall',demoController.showData);
router.post('/add',demoController.addData);


module.exports = router;