import { userCreate } from "../controller/userController";
import User from "../models/User";
import server from "../app.js";
import request from "supertest";

test("userCreate test", () => {
    const user = {
        email: "test1@test.com",
        username: "test1",
        passwrod: "test1234"
    };
})