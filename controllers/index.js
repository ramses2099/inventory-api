//case-uses
const { listCustomers, addCustomer } = require('../use-cases');

const makeGetCustomers = require('./get-customers');
const makeAddCustomer = require('./add-customer');


const getCutomers = makeGetCustomers({ listCustomers })
const addCustomers = makeAddCustomer({ addCustomer })

const customerController = Object.freeze({
    getCutomers,
    addCustomers
});

module.exports = customerController;
module.exports = { getCutomers, addCustomers };