const request = require("supertest");
const server = require("../src/server");

describe("HelloWorld Endpoints", () => {
  it("should get Hello world", async () => {
    const res = await request(server).get("/hi");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello World");
  });
});
