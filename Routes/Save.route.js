const express = require('express');
const Feedback = require('../models/Save.model'); // Assuming your Mongoose model is defined correctly
const Joi = require('joi');

const router = express.Router();

// Validation schema using Joi
const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email(),
    feedback: Joi.string().required()
});


router.post('/api/save', async  (req, res) => {
    try {
        const { error, value } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            return res.status(400).json({ message: 'Validation error', details: error.details });
        }

        const { name,description,imageURL,catogary} = req.body;

        const newsave = new Feedback({ name,description,imageURL,catogary });
        await newsave.save();

        res.status(201).json({ message: 'saved successfully', feedback: newsave });
    } catch (err) {
        // Handle errors if any
        console.error('Error saving :', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
