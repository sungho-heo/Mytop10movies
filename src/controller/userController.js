import User from "../models/User";

export const allUsers = (req, res) => {
    const users = User;
    return res.send({ users });
}

export const userCreate = async (req, res) => {
    let user;
    try {
        user = await User.create({
            email: email,
            username: username,
            password: password
        });
    } catch (error) {
        return res.status(400).json({ error: "Already user" });
    }
    return res.send({ user });
}