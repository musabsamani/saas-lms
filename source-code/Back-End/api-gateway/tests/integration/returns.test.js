const request = require("supertest");
const moment = require("moment");
const mongoose = require("mongoose");
const { Rental } = require("../../src/models/rental");
const { User } = require("../../src/models/user");
const { Movie } = require("../../src/models/movie");
const { Genre } = require("../../src/models/genre");

describe("/api/returns", () => {
  let server;
  let token;
  let rentalId;
  let customerId;
  let movieId;
  let rental;
  let movie;
  let url = "/api/returns";
  beforeEach(async () => {
    server = require("../../src/index");
    rentalId = new mongoose.Types.ObjectId();
    customerId = new mongoose.Types.ObjectId();
    movieId = new mongoose.Types.ObjectId();
    rental = new Rental({
      _id: rentalId,
      customer: {
        _id: customerId,
        name: "customer123456",
        phone: "12345",
      },
      movie: {
        _id: movieId,
        title: "movie123456",
        phone: "12345",
        dailyRentalRate: 2,
      },
      dateOut: moment().add(-7, "days").toDate(),
    });
    await rental.save();
    movie = new Movie({
      _id: movieId,
      title: "movie123456",
      genre: new Genre({ name: "musab1" }),
      numberInStock: 3,
      dailyRentalRate: 2,
    });
    await movie.save();
    token = new User().generateToken();
  });
  afterEach(async () => {
    await server.close();
    await Rental.deleteMany({});
    await Movie.deleteMany({});
  });
  const exec = () => request(server).post(url).set("x-auth-token", token).send({ customerId, movieId });
  const execId = (customerId, movieId) => request(server).post(url).set("x-auth-token", token).send({ customerId, movieId });

  it("should return 401 if user not logged in", async () => {
    token = "";
    const res = await exec();
    expect(res.status).toBe(401);
  });
  it("should return 400 if cutomerId not provided", async () => {
    movieId = "";
    const res = await exec();
    expect(res.status).toBe(400);
  });
  it("should return 400 if movieId not provided", async () => {
    customerId = "";
    const res = await exec();
    expect(res.status).toBe(400);
  });
  it("should return 404 if no rental found for cutomerId/movieId ", async () => {
    const randomId1 = new mongoose.Types.ObjectId().toHexString();
    const randomId2 = new mongoose.Types.ObjectId().toHexString();
    const res = await execId(randomId1, randomId2);
    expect(res.status).toBe(404);
  });
  it("should return 400 if rental already proccessed", async () => {
    await exec();
    const res = await exec();
    expect(res.status).toBe(400);
  });
  it("should return 200 if valid request", async () => {
    const res = await exec();
    expect(res.status).toBe(200);
  });
  it("should set dateReturned propert", async () => {
    const res = await exec();
    expect(res.body.dateReturned).toBeDefined();
  });
  it("should calculate the rental fee", async () => {
    const res = await exec();
    expect(res.body.rentalFee).toBe(14);
  });
  it("should increase the stock", async () => {
    await exec();
    const movieInDb = await Movie.findById(movieId);
    expect(movieInDb.numberInStock).toBe(movie.numberInStock + 1);
  });
  it("should return the rental", async () => {
    const res = await exec();
    const propertyArray = ["customer", "movie", "dateOut", "dateReturned", "rentalFee"];
    expect(Object.keys(res.body)).toEqual(expect.arrayContaining(propertyArray));
  });
});
