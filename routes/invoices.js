var express = require('express');
var router = express.Router();

Customer = require('../models/customer.js');
Invoice = require('../models/invoice.js');

// Get All Customers
router.get('/', function(req, res){
	Invoice.getInvoices(function(err, invoices){
		if(err){
			res.send(err);
		}
		res.json(invoices);
	});
});