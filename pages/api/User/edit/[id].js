import isConnect from "../../../../utils/db"
import userModel from "../../../../models/user"
import adminCheck from '../../../../validators/adminValidator'
import editorCheck from "../../../../validators/editorValidator"
import userCheck from "../../../../validators/userValidator"

const userEditHandler = async (req, res) => {

    isConnect()
    if (req.method == "PUT") {
        const id = +req.query.id

        if (isNaN(id) || id < 1) return res.json({ message: ["please enter valid id"] })

        const findUser = await userModel.find({ id: id })

        if (!findUser.length) return res.json({ message: "user not found" })

        const { name, email, password, rule, status } = req.body

        if (!name && !email && !password && !rule && !status) {
            return res.json({ message: ["Please enter the value of the field you want to change."] })
        }

        const checkValues = rule == "user" ? userCheck({name, email, password, rule, status}) : rule == "editor" 
                ? editorCheck({name, email, password, rule, status}) 
                        : adminCheck({name, email, password, rule, status}) 

        if(checkValues !== true) return res.json({message: checkValues})

        await userModel.findOneAndUpdate({ id: id }, {
            $set: {
                name: name || findUser.name,
                email: email || findUser.email,
                password: password || findUser.password,
                rule: rule || findUser.rule,
                status: status || findUser.status
            }
        })

        return res.json({ message: ["edit succesfully"] })

    } else {
        return res.json({ message: ["please send put request"] })
    }
}

export default userEditHandler