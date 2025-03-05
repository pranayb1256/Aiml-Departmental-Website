import jwt from "jsonwebtoken"

const generateToken = (id) => {
    const token = jwt.sign(
        {
            id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );

    res.cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "development",
    });

    return token;
}

export { generateToken };