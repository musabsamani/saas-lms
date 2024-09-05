const auth = require("../../../src/middleware/auth");
const { User } = require("../../../src/models/user");
describe("auth unit test", () => {
  it("should populate req.user with user object if provided valid token", async () => {
    const user = { name: "123456", isAdmin: false };
    const token = new User(user).generateToken();
    const req = { header: jest.fn().mockReturnValue(token) };
    const res = {};
    const next = jest.fn();
    auth(req, res, next);
    expect(req.user).toMatchObject(user);
  });
});
