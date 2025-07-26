const mongoose = require("mongoose")

const schema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        min: [1,"id must be a positive number"],
        index: true,
        unique: true
    }
}) 

const idModel = mongoose.models.id || mongoose.model("id",schema)

export default idModel