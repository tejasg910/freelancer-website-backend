const mongoose = require("mongoose");

const hireRequestSchema = new mongoose.Schema({
    projectId: {
        type: mongoose.Schema.ObjectId,
        ref: "project", 
    },
    freelancerId: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        // unique: true,
    },
    clientId: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
    },
    duration: {
        type: Number,
    },
    hourlyRate: {
        type: Number,
    },
    description: {
        type: String,
    },
    hireRequestStatus: {
        type: String,
        enum: ['rejected', 'agreed']
    }
}, 
{ timestamps: true })

module.exports = mongoose.model("hireRequest", hireRequestSchema);