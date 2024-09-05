const { Genre } = require("../../models/genre");
const request = require("supertest");
const { User } = require("../../models/user");
const jwt = require("jsonwebtoken");
const config = require("config");

let server;
let token;
beforeEach(() => {
  server = require("../../index");
  token = new User().generateToken();
});
afterEach(async () => {
  await Genre.deleteMany({});
  await server.close();
});
const exec = (genre = { name: "genre 1" }) => request(server).post("/api/genres").set("x-auth-token", token).send(genre);
describe("auth middle ware integration", () => {
  it("should return 401 error if header token not provided", async () => {
    token = "";
    const res = await exec();
    expect(res.status).toBe(401);
  });
  it("should return 400 error if header token provided invalid", async () => {
    const invalidToken = jwt.sign({}, config.get("jwtPrivateKey")) + "extra invalid";
    token = invalidToken;
    const res = await exec();
    expect(res.status).toBe(400);
  });
  it("should return 200 status response if header token provided is valid", async () => {
    const res = await exec();
    expect(res.status).toBe(200);
  });
});
