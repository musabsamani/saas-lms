const request = require("supertest");
const { Genre } = require("../../models/genre");
const { User } = require("../../models/user");
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
const exec = async (genre = { name: "genre 1" }) => request(server).post("/api/genres").set("x-auth-token", token).send(genre);
describe("Genres", () => {
  describe("GET /", () => {
    it("should return all genre", async () => {
      const genreList = [{ name: "genre " }, { name: "genre 2" }];
      await Genre.collection.insertMany(genreList);
      const res = await request(server).get("/api/genres");
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some((g) => g.name === "genre ")).toBeTruthy();
    });
  });
  describe("GET /:id", () => {
    it("should return genre if valid id is passed", async () => {
      const genre = new Genre({ name: "genre 1" });
      genre.save();
      const res = await request(server).get(`/api/genres/${genre._id}`);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("name", genre.name);
    });
    it("should throw 404 error if invalid id is passed", async () => {
      const id = "1";
      const res = await request(server).get(`/api/genres/${id}`);
      expect(res.status).toBe(404);
    });
  });
  describe("POST /", () => {
    it("return 401 error if user is logged in", async () => {
      token = "";
      const res = await exec();
      expect(res.status).toBe(401);
    });
    it("return 400 error if genre is invalid", async () => {
      const res = await exec({ name: "g" });
      expect(res.status).toBe(400);
    });
    it("return save the genre if it is valid", async () => {
      await exec({ name: "genre 1" });
      const genre = await Genre.findOne({ name: "genre 1" });
      expect(genre).not.toBeNull();
    });
    it("return return the genre in the response if it is valid", async () => {
      const res = await exec();
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("name", "genre 1");
      server.close();
    });
  });
});
