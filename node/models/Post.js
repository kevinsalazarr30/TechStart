const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    invoice_number: {
        type: String,
        require: true
    },
    total: {
        type: String,
        require: true
    },
    currency: {
        type: String,
        require: true
    },
    invoice_date: {
        type: Date,
        default : Date.now
    },
    due_date: {
        type: Date,
        default : Date.now
    },
    vendor_name: {
        type: String,
        require: true
    },
    remittance_address: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);