const { expect } = require('chai');
const JSONPlaceholder = require('../../src/MyApp/JSONPlaceholder')
const body = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
const title = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
const bodyPost = JSON.stringify({
    title: 'Teodora',
    body: 'bar',
    userId: 1,
  })
  const bodyUpdate = JSON.stringify({
    title: 'updatedTitle',
  })

const headerPost= {
    'Content-type': 'application/json; charset=UTF-8',
  }

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
        let response = await JSONPlaceholder.createUser(bodyPost,headerPost)
        console.log(response.data)
        expect(response.data.title).to.equal('Teodora')
        expect(response.data.body).to.equal('bar')
        expect(response.data.userId).to.equal(1)
        expect(response.status).to.equal(201)
    });

    it("Update Posts", async () => {
        let response = await JSONPlaceholder.updateUser(1,bodyUpdate,headerPost)
        console.log(response.data)
    });

    it("Delete Posts", async () => {
        let response = await JSONPlaceholder.deletePost(1)
        expect(response.status).to.equal(200)
    });

    it.only("Update Posts with PUT", async () => {
        let response = await JSONPlaceholder.updatePost(body,title,bodyUpdate)
        console.log(response)
    });

})
