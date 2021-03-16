const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { Router } = require('express');

const customerController = require('./controllers');

const makeCustomer = require('./entities');

//dotenv
dotenv.config();

const PORT = process.env.PORT;

const app = express();
const apiRouter = Router();
const router = Router()

app.use(bodyParser.json());

//router
apiRouter.get('/customers', customerController.getCutomers);
apiRouter.post('/customers', customerController.addCustomers);

router.use('/api', apiRouter);
//router

app.use(router);

app.listen(PORT, ()=>{
    console.log(`Application Running http://localhost:${PORT}`);
})

module.exports = app;

