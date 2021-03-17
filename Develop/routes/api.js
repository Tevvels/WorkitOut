const router = require("express").Router();
const Workout = require("../models/workout.js")


router.post("/api/workouts",({body},res)=>{
    Workout.create(body)
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


router.put("api/worksout/Id",({body,params}, res)=>{
    Workout.findByIdAndUpdate(
        params.id,{
            $push: {
                exercises: body
            }
        },
            {
               new:true, 
               runValidators:true 
            })
        .then(dbWorkout =>{
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err)
        })
    
})


router.get('/api/workouts',(req,res) => {
    Workout.aggregate([
        {
            $addFields:{
                totalDuration: {
                    $sum: "$exersice.duration"
                }
            }
        }
    ])
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
    })
})


router.delete('/api/workouts',({body},res)=>{
    Workout.findByIdAndDelete(body.id)
    .then(()=>{
        res.json(true)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

module.exports = router;