import User from "../models/User";

export const allUsers = async(req, res) => {
    const users = await User.find({});
    return res.send( users );
}

export const userCreate = async (req, res) => {
    const { email, username, password } = req.params;
    try {
        const user =await User.create({
            email: email,
            username: username,
            password: password
        });
        user.save();
        return res.send({ user });
    } catch (error) {
        return res.status(400).send({ error });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.status(200);
}