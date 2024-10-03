const express = require('express');

// Server side validation of input
// Validates entire body of url, i.e. its parameters/fields, whether it contains string, array or number etc.
// If paramater/field sent to server doesn't meet the required check then it won't go onto the route or the controller  
const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

router.post(
    '/signup',
    [
        body('username').trim().not().isEmpty()
        .custom(async (username) => {
            const user = await User.find(username);
            if ()
        }),
        body('password').trim().isLength({min: 7}),
    ],
    authController.signup
);