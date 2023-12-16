const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    triggeredBy: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
    notify: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
    notificationMessage: {
      type: String,
      req: true,
    }, // project applied "project title " by "user name"
    isRead: {
      type: Boolean,
      default: false,
    },
    projectId: {
      type: mongoose.Schema.ObjectId,
      ref: "project",
    },
    hireRequestId: {
      type: mongoose.Schema.ObjectId,
      ref: "hireRequest",
    },
    notificationType: {
      type: String,
      enum: [
        "jobApplication",
        "hireRequest",
        "review",
        "applicantHired",
        "applicantRejected",
        "agreeHireRequest",
        "rejectedHireRequest",
        "message",
        "hired",
        "rejected",
      ],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("notification", notificationSchema);
