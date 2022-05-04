const { expect } = require('chai');
const JSONPlaceholder = require('../../src/MyApp/JSONPlaceholder')

describe("Users API Testing", async () => {
    it("Get Users", async () => {
        let response = await JSONPlaceholder.getUsers()
        console.log(response.data[0]);
        expect(response.status).equals(200); 
    });

    it("Create Users", async () => {
    });

    it("Update Users", async () => {
    });

    it("Delete Users", async () => {
    });
})
