import isConnect from "../../../utils/db"
import userCheck from "../../../validators/userValidator"
import userModel from "../../../models/user"

const userHandler = async (req, res) => {
    if (req.method == "POST") {
        isConnect()
        let { name, email, rule, status } = req.body
    
        const id = (await userModel.find()).length + 1

        if (!name) return res.json({ message: ["please enter a name"] })
        if (!email) return res.json({ message: ["please enter a email"] })
        if (!rule) return res.json({ message: ["please enter a rule"] })
        if (!status) return res.json({ message: ["please enter a status"] })
        if (!password) return res.json({ message: ["please enter a password"] })


        const validate = userCheck({ name, email, password, rule, status })
        const findName = await userModel.find({name: name})
        const findEmail = await userModel.find({email: email})
        
        if(findName.length) return res.json({message: ["Username already exists."]})
        if(findEmail.length) return res.json({message: ["email alredy exist"]})

        if (validate == true) {
            userModel.create({id , name, email, password, rule, status })

            return res.json({ message: ["user added"] })
        } else {
            return res.json({ validate })
        }

    } else if(req.method == "GET"){
        const allUsers = await userModel.find()

        return res.json({users: allUsers})

    } else {
        return res.json({ message: ["please enter a valid request"] })
    }

}

export default userHandler