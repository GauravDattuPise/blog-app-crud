const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim : true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim : true
        },
        password: {
            type: String,
            required: true,
            trim : true
        },
        role: {
            type: String,
            default: "regular",
            enum: ["regular", "admin"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
