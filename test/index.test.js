const request = require("supertest"); // supertest is a framework that allows to easily test web apis
const app = require("../index");

// test("testing server routes", () => {
    test("GET /id - success", async () => {
        const { body } = await request(app).get("/id"); //uses the request function that calls on express app instance
        expect(body).toEqual({
            "id": "carpaccio-khadija-amira"
        })
    });
// });
