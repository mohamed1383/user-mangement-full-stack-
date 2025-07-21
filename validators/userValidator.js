const vaildator = require('fastest-validator')

const v = new vaildator()

const schema = {
    name: { type: "string", min: 3 },
    email: { type: "email" },
    password: {
        type: "string",
        min: 8,
        pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
        messages: {
            stringPattern: "Password must contain letters and numbers."
        }
    },
    rule: { type: "enum", values: ["user"] },
    status: { type: "enum", values: ["active", "inactive", "pending"] }
};

const userCheck = v.compile(schema)

export default userCheck