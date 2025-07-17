const mongoose = require("mongoose")

const isConnect = async () => {
    try {

        if(mongoose.connections[0].readyState){
            return 
        }

        await mongoose.connect("mongodb://localhost:27017/myApp")
    } catch (err) {
        console.log("connection failed", err)
    }
}

export default isConnect