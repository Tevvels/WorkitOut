const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "name of workout required"
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
        trim: true,
        required: "name of workout required"
    },
    reps: {
        type: Number,
        trim: true,
        required: "name of workout required"
    },
    sets: {
        type: Number,
        trim: true,
        required: "name of workout required"
    }

});

const Workout = mongoose.model("Workout",workoutSchema);

module.exports  = Workout;