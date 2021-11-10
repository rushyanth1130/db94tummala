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
exports.nut_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Nut.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.nut_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Nut.findById( req.params.id)
    // Do updates of properties
    if(req.body.nut_type)
    toUpdate.nut_type = req.body.nut_type;
    if(req.body.Price) toUpdate.Price = req.body.Price;
    if(req.body.Quantity) toUpdate.Quantity = req.body.Quantity;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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