import express from 'express';
import Volunteer from "../models/volunteerSchema.js";


const router = express.Router();

router.route('/').get(async(req, res, next) => {
    try{
        const entries = await Volunteer.find();
        res.json(entries);
    } catch (error){
        next(error);
    }
})

router.route('/').post(async(req, res, next) => {
    const { name, bloodGroup, description, email } = req.body;
    console.log(req);
    try{
        const volunteer = new Volunteer({
            name,
            bloodGroup,
            description,
            email
        });
        const createdEntry = await volunteer.save();
        res.json(createdEntry);
    } catch (error) {
        if(error.name === 'ValidationError'){
            res.status(422);
        }
        next(error);
    }

});

export default router;