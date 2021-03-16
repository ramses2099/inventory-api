module.exports = function makeGetCustomers({ listCustomers }) {
    return async function getCutomers(req, res) {
        const customer =  await listCustomers();
        res.send(customer);
    }

}