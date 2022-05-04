const { expect } = require('chai');
const JSONPlaceholder = require('../../src/MyApp/JSONPlaceholder')

describe("Posts API Testing", async () => {
    it("Get Posts", async () => {
        let response = await JSONPlaceholder.getPosts()
        // console.log(response.data[0]);
        expect(response.status).equals(200);
        console.log(response.data)
       // expect(response.data).to.not.be.empty()
        expect(response.data[0].title).to.contain('')
    });

    it("Create Posts", async () => {
        let response = await JSONPlaceholder.createUser()
        console.log(response.data)
        expect(response.data.title).to.contain('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    });

    it("Update Posts", async () => {
        
    });

    it("Delete Posts", async () => {
    });
})
