// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import stock controller
var stockController = require('./stockController');
// stock routes
router.route('/stocks')
    .get(stockController.index)
    .post(stockController.new);

router.route('/stocks/list')
    .get(stockController.list);

router.route('/stocks/chart')
    .get(stockController.chart);

router.route('/stocks/:stock_id')
    .get(stockController.view)
    .patch(stockController.update)
    .put(stockController.update)
    .delete(stockController.delete);
// Export API routes
module.exports = router;