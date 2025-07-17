import isConnect from "../../utils/db"

const myApi = (req, res) => {
    isConnect()
    return res.json({message: ["wellcom to your api"]})    
}

export default myApi