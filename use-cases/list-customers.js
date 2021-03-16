module.exports = function makeListCustomers({ db }){

    return async function listCustomer() {
        
        const customers = await db.customers.findAll();

        return customers;
    }


}