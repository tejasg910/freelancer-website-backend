const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectTitle: {
      type: String,
      //         required: true,
    },
    description: {
      type: String,
      //         required: true,
    },
    skills: [
      {
        type: String,
        //         required: true,
      },
    ],
    education: [
      {
        type: String,
      },
    ],
    workLocation: [
      {
        type: String,
        default: "remote",
      },
    ],
    softwareRequirements: [
      {
        type: String,
      },
    ],
    freelancersCount: {
      type: Number,
      //         required: true
    },
    duration: {
      from: {
        type: Date,
        trim: true,
        default: "",
      },
      to: {
        type: Date,
        trim: true,
        default: "",
      },
    },
    visibility: [
      {
        type: String,
      },
    ],
    budget: {
      minPrice: Number,
      maxPrice: Number,
      currency: String,
    },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
    appliedBy: [
      {
        userId: {
          type: mongoose.Schema.ObjectId,
          ref: "user",
        },
        applicationId: {
          type: mongoose.Schema.ObjectId,
          ref: "application",
        },
      },
    ],
    favByUsers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "user",
      },
    ],
    hireRequests: [
      {
        freelancerId: {
          type: mongoose.Schema.ObjectId,
          ref: "user",
        },
        hireRequest: {
          type: mongoose.Schema.ObjectId,
          ref: "hireRequest",
        },
      },
    ],
    hired: [
      {
        freelancerId: {
          type: mongoose.Schema.ObjectId,
          ref: "user",
          // unique: true,
        },
        applicationId: {
          type: mongoose.Schema.ObjectId,
          ref: "application",
        },
        hireRequestId: {
          type: mongoose.Schema.ObjectId,
          ref: "hireRequest",
        },
      },
    ],
  },
  { timestamps: true }
);

// run this below line in mongo for full text search
// db.projects.createIndex({ "$**" : "text" })

module.exports = mongoose.model("project", projectSchema);
