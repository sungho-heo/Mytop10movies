import server from "../server.js"
import request from "supertest"
import mongoose from "mongoose"
import { MongoMemoryServer } from "mongodb-memory-server"
import Video from "../models/Video.js"

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
  await Video.deleteMany()
})

describe("Video API", () => {
    test("should get All videos", async () => {
        const video = await Video.find({});
        await request(server).get("/movies").send(video).expect(200);
  })
})


