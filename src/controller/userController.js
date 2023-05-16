let users = [
    {
    id: 1,
    name: "준"
    },
    {
    id: 2,
    name: "정훈"
    },
    {
        id: 3,
        name: "철수"
    }
];


export const userLogin = (req, res) => {
    const { id } = req.params;
    const user = users.find(user => parseInt(user.id) === parseInt(id));
    if (!user) {
        return res.status(400).json({ error: "No User" });
    }
    return res.send(user);
};
export const userJoin = (req, res) => {
    const newUser = { id: users.length + 1, name: "영희" };
    if (!newUser.name) {
        return res.status(404).json({ error: "plz name write" });
    }
    users.push(newUser);
    return res.send(newUser);
};

