import isConnect from "../../../utils/db"
import userCheck from "../../../validators/userValidator"
import userModel from "../../../models/user"
import idModel from "../../../models/usersId"

const userHandler = async (req, res) => {
    if (req.method == "POST") {
        isConnect()
        let { name, email, password, rule, status } = req.body

        if (!name) return res.json({ message: ["please enter a name"] })
        if (!email) return res.json({ message: ["please enter a email"] })
        if (!rule) return res.json({ message: ["please enter a rule"] })
        if (!status) return res.json({ message: ["please enter a status"] })
        if (!password) return res.json({ message: ["please enter a password"] })

        const validate = userCheck({ name, email, password, rule, status })
        const findName = await userModel.find({ name: name })
        const findEmail = await userModel.find({ email: email })

        if (findName.length) return res.json({ message: ["Username already exists."] })
        if (findEmail.length) return res.json({ message: ["email alredy exist"] })

        if (validate == true) {

            const id = (await idModel.find()).length ? (await idModel.find())[0].id : 0
            const newId = id + 1

            if (id == 0) {
                await idModel.create({ id: id + 1 })
            } else {
                await idModel.findOneAndUpdate({ id: id }, { id: newId })
            }

            console.log(newId)

            userModel.create({ id: newId, name, email, password, rule, status })

            return res.status(200).json({ message: ["user added"], statusCode: 200 })
        } else {
            return res.json({ message: validate })
        }

    } else if (req.method == "GET") {
        const allUsers = await userModel.find()

        return res.json({ users: allUsers })

    } else {
        return res.json({ message: ["please enter a valid request"] })
    }

}

export default userHandler