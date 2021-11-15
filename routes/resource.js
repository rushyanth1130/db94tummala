var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var nut_controller = require('../controllers/nut');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// nut ROUTES ///
// POST request for creating a nut.
router.post('/nuts', nut_controller.nut_create_post);
// DELETE request to delete nut.
router.delete('/nuts/:id', nut_controller.nut_delete);
// PUT request to update nut.
router.put('/nuts/:id',nut_controller.nut_update_put);
// GET request for one nut.
router.get('/nuts/:id', nut_controller.nut_detail);
// GET request for list of all nut items.


router.get('/nuts', nut_controller.nut_list);




module.exports = router;