var express = require('express');
const nut_controlers= require('../controllers/nut');
var router = express.Router();
/* GET nuts */
router.get('/', nut_controlers.nut_view_all_Page );

/* GET detail nut page */
router.get('/detail', nut_controlers.nut_view_one_Page);

/* GET create nut page */
router.get('/create', nut_controlers.nut_create_Page);
/* GET create update page */
router.get('/update', nut_controlers.nut_update_Page);

/* GET create costume page */
router.get('/delete', nut_controlers.nut_delete_Page);
module.exports = router;