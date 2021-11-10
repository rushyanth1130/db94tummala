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
exports.nut_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Nut();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"nutName":"goat", "Price":12, "Quantity":"large"}
    document.nutName = req.body.nutName;
    document.Price = req.body.Price;
    document.Quantity = req.body.Quantity;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle nut delete form on DELETE.
exports.nut_delete = function(req, res) {
res.send('NOT IMPLEMENTED: nut delete DELETE ' + req.params.id);
};
// Handle nut update form on PUT.
exports.nut_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: nut update PUT' + req.params.id);
};


// Handle a show all view
exports.nut_view_all_Page = async function(req, res) {
try{
thenuts = await Nut.find();
res.render('Nuts', { title: 'nut Search Results', results: thenuts });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};