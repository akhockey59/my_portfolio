const express = require('express');
const { sendEmailController } = require('./controller');

const router = express.Router();

router.post('/sendEmail', sendEmailController);


module.exports = router;