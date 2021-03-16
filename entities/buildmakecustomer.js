module.exports = function buildMakeCustomer() {

    return function makeCustomer({
        name,
        tel,
        email,
        createdAt = new Date(),
        updatedAt = new Date()
    } = {}) {
        if (!name) {
            throw new Error('Customer must have a name');
        }

        if (!tel) {
            throw new Error('Customer must have a tel');
        }

        if (!email) {
            throw new Error('Customer must have a email');
        }

        return Object.freeze({
            getName: () => name,
            getTel: () => tel,
            getEmail: () => email,
            getCreatedAt: () => createdAt,
            getUpdatedAt: () => updatedAt
        });

    }

}