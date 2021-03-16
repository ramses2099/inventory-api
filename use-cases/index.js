
const db = require('../data-acces');
const makeListCustomers = require('./list-customers');
const makeAddCustomers = require('./add-customer');

const listCustomers = makeListCustomers({ db });
const addCustomer = makeAddCustomers({ db }); 

const customerService = Object.freeze({
    listCustomers,
    addCustomer
});

module.exports = customerService;
module.exports = { listCustomers, addCustomer }