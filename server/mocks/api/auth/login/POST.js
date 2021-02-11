var jwt = require("jsonwebtoken");
module.exports = function (request, response) {
    console.log("body: ", request.body);
    const { username, password } = request.body;
    if (username === "admin" && password === "123456") {
        let token = jwt.sign(
            {
                username,
            },
            "PRIVATE_KEY",
            { expiresIn: 60 * 60 * 8 }
        );
        console.log("Token: ", token);
        response.status(200).json({
            success: true,
            token,
            username,
        });
    } else {
        response.status(200).json({
            success: false,
            message: "Username or password is incorrect!",
        });
    }
};
