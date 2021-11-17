var express = require('express');
const nut_controlers= require('../controllers/nut');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET nuts */
router.get('/' , nut_controlers.nut_view_all_Page );

/* GET detail nut page */
router.get('/detail', secured, nut_controlers.nut_view_one_Page);

/* GET create nut page */
router.get('/create',secured, nut_controlers.nut_create_Page);
/* GET create update page */
router.get('/update',  nut_controlers.nut_update_Page);

/* GET create nut page */
router.get('/delete', secured,  nut_controlers.nut_delete_Page);
module.exports = router;