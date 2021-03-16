module.exports = function makeAddCustomer({ addCustomer }) {
    return async function addCutomers(req, res) {
        const { body } = req;      
        const {name, tel, email} = body;
        const customer =  await addCustomer({name, tel, email});
        res.send(customer);
    }

}