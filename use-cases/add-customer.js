const makeCustomer = require('../entities');

module.exports = function makeAddCustomers({ db }) {

    return async function addCustomer({ name, tel, email }) {

        const cust = makeCustomer({ name, tel, email });

        const customer = await db.customers.create({
            name: cust.getName(),
            tel: cust.getTel(),
            email: cust.getEmail(),
            createdAt: cust.getCreatedAt(),
            updatedAt: cust.getUpdatedAt()
        });

        return customer;
    }


}