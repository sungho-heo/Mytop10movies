import server from "../server.js";
import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import User from "../models/User.js";

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  const mongoUri = mongoServer.getUri()
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})

beforeEach(async () => {
  await User.deleteMany()
})

describe("User API", () => {
  test("should create a new user", async () => {
    const userData = {
      email: "john@example.com",
      username: "johndoe",
      password: "password123",
    }

    const response = await request(server)
      .post("/users/join")
      .set("Content-Type", "application/json")
      .send(userData)
      .expect(201)
      
    expect(response.body.user.username).toBe(userData.username)
    expect(response.body.user.password).toBe(userData.password)
    expect(response.body.user.email).toBe(userData.email)
  })  
})

describe("User API", () => {
    test("all user data", async () => {
        const user = await User.find({})
        await request(server).get("/users").send(user).expect(200);
    })
})



