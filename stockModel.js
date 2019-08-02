// stockModel.js
var mongoose = require('mongoose');
// Setup schema
var stockSchema = mongoose.Schema({
    company_name: {
        type: String,
        required: true
    },
    ticker: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    open_price: {
        type: String,
        required: true
    },
    open_date: {
        type: String,
        required: true
    },
    close_price: {
        type: String,
        required: true
    },
    close_date: {
        type: String,
        required: true
    }
},{
    strict: false
});
// Export stock model
var stock = module.exports = mongoose.model('stocks', stockSchema);
module.exports.get = function (callback, limit) {
    stock.find(callback).limit(limit);
}