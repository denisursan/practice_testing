const requests = require("../basicRequests");

const URL = "https://jsonplaceholder.typicode.com/";
const USERS_URL = URL + "users";
const POSTS_URL = URL + "posts";
const headers = {
  "Content-Type": "application/json",
};
var id;

class JSONPlaceholder {
  getUsers = async () => {
    return await requests.get(USERS_URL, headers);
  };

  getPosts = async () => {
    return await requests.get(POSTS_URL, headers);
  };

  getSpecificPost = async (id) => {
    return await requests.get(POSTS_URL + `/${id}`, headers);
  };

  createUser = async (body, headers) => {
    return await requests.post(POSTS_URL, body, headers);
  };
  updateUser = async (id, body, header) => {
    return await requests.patch(POSTS_URL + `/${id}`, body, header);
  };

  deletePost = async (id) => {
    return await requests.delete(POSTS_URL + `/${id}`);
  };

  async generateNewPostContent() {
    for (var a = "", b = 36; a.length < 40; )
      a += ((Math.random() * b) | 0).toString(b);
    // var crypto = require("crypto");
    // var id = crypto.randomBytes(20).toString('hex');
    let body = JSON.stringify({
      title: a,
    });
    return body;
  }

  async findPostById() {
    const response = await this.getSpecificPost(1);
    console.log(response.data);
    return id;
  }

  async findPostByTitle(title) {
    const posts = await this.getPosts();
    const data = posts.data;
    let id;
    await data.forEach((el) => {
      if (el.title === title) {
        id = el.id;
      }
    });
    console.log('idul din find post by title method'+ id)
    return id;
  }

  updatePost = async (title) => {
    let id = await this.findPostByTitle(title);
    return await requests.put(
      POSTS_URL + `/${id}`,
      await this.generateNewPostContent(),
      headers
    );
  };
}
module.exports = new JSONPlaceholder();
