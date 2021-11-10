var Nut = require('../models/nut');
// List of all Nuts
exports.nut_list = async function(req, res) {
    try{
    thenuts = await Nut.find();
    res.send(thenuts);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific nut.
exports.nut_detail = function(req, res) {
res.send('NOT IMPLEMENTED: nut detail: ' + req.params.id);
};
// Handle nut create on POST.
exports.nut_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: nut create POST');
};
// Handle nut delete form on DELETE.
exports.nut_delete = function(req, res) {
res.send('NOT IMPLEMENTED: nut delete DELETE ' + req.params.id);
};
// Handle nut update form on PUT.
exports.nut_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: nut update PUT' + req.params.id);
};