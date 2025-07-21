import isConnect from "../../../utils/db"
import editorCheck from "../../../validators/editorValidator"
import userModel from "../../../models/user"

const editorHandler = async (req, res) => {
    if (req.method == "POST") {
        isConnect()

        const { name, email, password, rule, status } = req.body

        if (!name) return res.json({ message: ["please enter a name"] })
        if (!email) return res.json({ message: ["please enter a email"] })
        if (!rule) return res.json({ message: ["please enter a rule"] })
        if (!status) return res.json({ message: ["please enter a status"] })
        if (!password) return res.json({ message: ["please enter a password"] })


        const validate = editorCheck({ name, email, password , rule, status })
        const findName = await userModel.find({name: name})
        const findEmail = await userModel.find({email: email})
        
        if(findName.length) return res.json({message: ["Username already exists."]})
        if(findEmail.length) return res.json({message: ["email alredy exist"]})

        if (validate == true) {
            userModel.create({ name, email, password , rule, status })

            return res.json({ message: ["user added"] })
        } else {
            return res.json({ validate })
        }

    } else {
        return res.json({ message: ["please enter valid request"] })
    }
}

export default editorHandler