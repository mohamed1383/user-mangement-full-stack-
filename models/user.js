const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    }

    ,email: {
        type: String,
        required: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },

    password: {
        type: String,
        required: true,
        match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    },

    status: {
        type: String,
        required: true,
    },

    rule:  {
        type: String,
        enum: ["user","admin","editor"],
        required: true
    }
})

const userModel = mongoose.models.user || mongoose.model("user",schema)

export default userModel