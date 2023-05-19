import User from "../models/User";

export const allUsers = async(req, res) => {
    const users = await User.find({});
    return res.send( users );
}

export const userCreate = async (req, res) => {
    try {
        const user =await User.create({
            email: email,
            username: username,
            password: password
        });
        user.save();
        return res.send({ user });
    } catch (error) {
        return res.status(400).json({ error: "Already user" });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
}