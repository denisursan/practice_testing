const requests = require('../basicRequests')


const URL = 'https://jsonplaceholder.typicode.com/'
const USERS_URL = URL + 'users'
const POSTS_URL = URL + 'posts'
const headers = {
    'Content-Type': 'application/json',
}
const body = {
    "userId": 1,

    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit  consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
var id;


class JSONPlaceholder {

    getUsers = async () => {
        return await requests.get(USERS_URL, headers)
    }

    getPosts = async () => {
        return await requests.get(POSTS_URL, headers)
    }

    createUser = async ()=>{
       return await requests.post(POSTS_URL,body,headers)
    }
    deleteUser = async(id) => {
        return await requests.delete(USERS_URL+`/${id}`)
    }

    deletePost = async(id) => {
        return await requests.delete(POSTS_URL+`/${id}`)
    }

    async generateNewPostContent(id, newContent) {

        return body
    }

    async findPost(username, title) {

        return id
    }

    // updateUser = async (id) => {
    //     return await requests.put(POSTS_URL, UPDATE_USER_BODY, headers)
    // }

    updatePost = async (username, title, newContent) => {
        let id = await this.findPost(username, title)
        return await requests.put(POSTS_URL, this.generateNewPostContent(id, newContent), headers)
    }
}
module.exports = new JSONPlaceholder()