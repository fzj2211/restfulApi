// stockController.js
// Import stock model
Stock = require('./stockModel');
// Handle index actions
exports.index = function (req, res) {
    Stock.get(function (err, stocks) {
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

exports.list = function (req, res) {
    Stock.find({ticker:req.query.ticker}, function(err, stocks){
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: req.query.ticker + " retrieved successfully",
            data: stocks
        });
    });
};

// Handle create stock actions
exports.new = function (req, res) {
    var stock = new Stock();
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
    Stock.findById(req.params.stock_id, function (err, stock) {
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
Stock.findById(req.params.stock_id, function (err, stock) {
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
    Stock.remove({
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