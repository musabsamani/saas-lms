const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");
const { User } = require("../../../src/models/user");

describe("user.generateToken", () => {
  it("should return valid JWT", async () => {
    const payload = { _id: new mongoose.Types.ObjectId().toHexString(), isAdmin: true };
    const user = new User(payload);
    const token = user.generateToken();
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    expect(decoded).toMatchObject(payload);
  });
});
