// stockController.js
// Import stock model
Stock = require('./stockModel');
const symbols = ['aapl', 'gluu', 'mu', 'ntap', 'msft', 'intc', 'znga', 'csco', 'siri', 'jd', 'fb', 'nvda', 'bl', 'ftnt', 'chrs', 'loco', 'catm', 'cnce', 'fizz', 'acor', 'fldm', 'sptn', 'cent', 'xent', 'adap', 'gpro', 'brks', 'sgms', 'iova', 'aaon', 'eigi', 'amzn', 'nflx', 'tsla'];
function ChartItem(id, color, data){
  this.id = id;
  this.color = color;
  this.data = data;
}

function findStock(queryParam) {
    return new Promise((resolve, reject)=>{
        Stock.find(queryParam, function(err, stocks){
            if (err) {
                reject(err);
            } else {
                resolve(stocks);
            }
        });
    });
}
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

exports.chart = function (req, res) {
    let tickers = req.query.tickers.split(',');
    let data = [];
    let pArray = [];
    for (var i = 0; i < tickers.length; i++) {
        if (symbols.indexOf(tickers[i]) != -1) {
            let p = findStock({ticker:tickers[i]});
            pArray.push(p);
        }
    }
    Promise.all(pArray).then(results=>{
        results.forEach(stocks=>{
            let color = 'hsl(' + parseInt(255 * Math.random()) + ', ' + parseInt(100 * Math.random()) + '%' + ', ' + parseInt(100 * Math.random()) + ')';
            let chartItem = new ChartItem('', color, []);
            stocks.forEach(stock=>{
                chartItem.id = stock.ticker;
                chartItem.data.push({
                    x:stock.open_date,
                    y:parseFloat(stock.open_price.replace(',', '').substring(2))
                });
            });
            data.push(chartItem);
        });
        res.json({
            status: "success",
            message: "chart:" + req.query.chartName + " retrieved successfully",
            data: data
        });
    }).catch(err=>{
        console.log(err);
        res.json({
            status: "error",
            message: err,
        });
    })
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