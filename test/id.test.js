const { TestScheduler } = require("jest");
const id = require("../src/server_modules/id");

test("Test unitaire du module id", () => {
    expect(id.getId()).toEqual({
        "id": "carpaccio-khadija-amira"
    })
})