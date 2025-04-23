const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// GET route for the email form page
router.get('/', (req, res) => {
    res.render('index');
});

// POST route for sending emails
router.post('/send', emailController.sendEmail);

module.exports = router; 