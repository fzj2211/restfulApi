// stockController.js
// Import stock model
stock = require('./stockModel');
// Handle index actions
exports.index = function (req, res) {
    stock.get(function (err, stocks) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "stocks retrieved successfully",
            data: stocks
        });
    });
};
// Handle create stock actions
exports.new = function (req, res) {
    var stock = new stock();
    stock.name = req.body.name ? req.body.name : stock.name;
    stock.gender = req.body.gender;
    stock.email = req.body.email;
    stock.phone = req.body.phone;
// save the stock and check for errors
    stock.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New stock created!',
            data: stock
        });
    });
};
// Handle view stock info
exports.view = function (req, res) {
    stock.findById(req.params.stock_id, function (err, stock) {
        if (err)
            res.send(err);
        res.json({
            message: 'stock details loading..',
            data: stock
        });
    });
};
// Handle update stock info
exports.update = function (req, res) {
stock.findById(req.params.stock_id, function (err, stock) {
        if (err)
            res.send(err);
stock.name = req.body.name ? req.body.name : stock.name;
        stock.gender = req.body.gender;
        stock.email = req.body.email;
        stock.phone = req.body.phone;
// save the stock and check for errors
        stock.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'stock Info updated',
                data: stock
            });
        });
    });
};
// Handle delete stock
exports.delete = function (req, res) {
    stock.remove({
        _id: req.params.stock_id
    }, function (err, stock) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'stock deleted'
        });
    });
};