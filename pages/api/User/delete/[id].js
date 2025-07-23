import userModel from "../../../../models/user";

const deleteHandler = async (req,res) => {
    if(req.method == "DELETE"){
        const id = +req.query.id

        if (isNaN(id) || id < 1) return res.json({ message: ["please enter valid id"] })

        const findUser = await userModel.find({id: id})

        console.log(findUser)

        if(!findUser.length) return res.json({message: ["user not found"]})

        await userModel.findOneAndDelete({id: id})    

       return res.json({message: ["delete succesfull!"]})     
    } else{
        return res.json({message: ["please send valid request"]})
    }
}

export default deleteHandler