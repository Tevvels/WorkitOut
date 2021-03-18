const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises:[{
        type:{
            type: String,
        },
        name: {
            type: String,
            trim: true,
            required: "name of workout required"
        },
        duration: {
            type: Number,
        },
        distance: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,

        },
        sets: {
            type: Number,

        }
    }]
    
});

const Workout = mongoose.model("Workout",workoutSchema);

module.exports  = Workout;