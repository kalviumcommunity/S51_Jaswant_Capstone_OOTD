const express =  require('express');
const  Feedback  = require('../models/Feedback.model');
const FeedbackRouter = express.Router();
const Joi = require('joi')
const schema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email(),
    feedback:Joi.string().required()
  });
FeedbackRouter.post('/api/feedback', async(req, res) =>{
    const {error,value} = schema.validate(req.body,{abortEarly:false}); 
    try{
        if (!error) {
        let{name,email,feedback} = req.body;
        const formData = await Feedback.create({name,email,feedback});
        res.status(201).json(formData);}
        else {
            return res.status(400).send({
            message: `Bad request ${error}`
            })
            console.error(error)
        }
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})
module.exports=FeedbackRouter;