const express = require('express');
const router = express.Router();
const Dream = require('../models/dream');

router.get('/', async(req, res) => {
    try{
        const dreams = await Dream.find();
        res.json(dreams);

    } catch(err){
        res.send('Error ' + err);
    }
});

router.post('/', async(req, res) => {
    const dream = new Dream({
        'dream_name': req.body.dream_name,
        'difficulty': req.body.difficulty,
        'fear_level': req.body.fear_level,
    })
    try{
        const data = await dream.save();
        res.json(data);
    } catch(err){
        res.send('Error ' + err)
    }

});

router.get('/:id', async(req, res) => {
    try{
        const data = await Dream.findById(req.params.id);
        if (data){
            res.json(data);
        }else{
            res.send("ID not Found......");
        }
    } catch(err){
        res.send('Error ' + err)
    }

});

router.patch('/:id', async(req, res) => {
    try{
        const data = await Dream.findById(req.params.id);
        if (data){
            if (req.body.dream_name){
                data.dream_name = req.body.dream_name;
            }
            if (req.body.difficulty){
                data.difficulty = req.body.difficulty;
            }
            if (req.body.fear_level){
                data.fear_level = req.body.fear_level;
            }
            if (req.body.completion_date){
                data.completion_date = req.body.completion_date;
            }
            const a1 = await data.save();
            res.json(a1);
        }else{
            res.send("Dream not Found......");
        }
    } catch(err){
        res.send('Error ' + err)
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const data = await Dream.findById(req.params.id);
        if (data){
            const a1 = await data.remove();
            // res.json(a1);
            res.send("Deleted Successfully");
        }else{
            res.send("ID not Found......");
        }
    } catch(err){
        res.send('Error ' + err)
    }

});


module.exports =router