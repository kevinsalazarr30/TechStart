const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
var socketC = require('../socket.js');


router.get('/', async (req, res) => {
    try {
        const result = await Post.find({ status: "pending" });
        res.json(result);
    } catch (error) {
        const response = {
            code: 500,
            message: ERR
        };
        res.json(response);
    }
});


router.post('/', async (req, res) => {

    try {
        const post = new Post({
            invoice_number: req.body.invoice_number,
            total: req.body.total,
            currency: req.body.currency,
            invoice_date: req.body.invoice_date,
            due_date: req.body.due_date,
            vendor_name: req.body.vendor_name,
            remittance_address: req.body.remittance_address,
            status: 'pending'
        });
        const savedPost = await post.save();
        const response = {
            code: 200,
            message: "invoice submitted successfully"
        };

        // EMITE
        socketC.emitLoader();
        //
        res.json(response);
    } catch (err) {
        const response = {
            code: 500,
            message: err
        };
        res.json(response);
    }
});


router.post('/:postId', async (req, res) => {

    try {
        const updateStatus = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { status: "Approved" } });
        const response = {
            code: 200,
            message: "status update success !!"
        };
        res.json(response);
    } catch (err) {
        const response = {
            code: 500,
            message: ERR
        };
        res.json(response);
    }
});

module.exports = router;