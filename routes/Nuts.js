var express = require('express');
const nut_controlers= require('../controllers/nut');
var router = express.Router();
/* GET nuts */
router.get('/', nut_controlers.nut_view_all_Page );
module.exports = router;