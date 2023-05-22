import User from "../models/User";

export const allUsers = async(req, res) => {
    const users = await User.find({});
    if (!users) {
        throw new Error;
    }
    return res.send( users );
}

export const userCreate = async (req, res) => {
    const { email, username, password } = req.body;
    try {
        const user = await User.create({
            email: email,
            username: username,
            password: password,
        })
        user.save();
        return res.status(201).send({user})
    } catch (error) {
        return res.status(400).send({ error });
    }
};


export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        return res.status(200);
    } catch (error) {
        return res.status(404).send({ error });
    }
}