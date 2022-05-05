const requests = require('../basicRequests')


const URL = 'https://jsonplaceholder.typicode.com/'
const USERS_URL = URL + 'users'
const POSTS_URL = URL + 'posts'
const headers = {
    'Content-Type': 'application/json',
}
var id;


class JSONPlaceholder {

    getUsers = async () => {
        return await requests.get(USERS_URL, headers)
    }

    getPosts = async () => {
        return await requests.get(POSTS_URL, headers)
    }

    createUser = async (body,headers)=>{
       return await requests.post(POSTS_URL,body,headers)
    }
    updateUser = async(id,body,header) => {
  
        return await requests.patch(POSTS_URL+`/${id}`,body,header)
    }

    deletePost = async(id) => {
        return await requests.delete(POSTS_URL+`/${id}`)
    }

    async generateNewPostContent(id, newContent) {

        return body
    }

    async findPost(body, title) {

        return id
    }

    

    updatePost = async (body, title, newContent) => {
        let id = await this.findPost(body, title)
        return await requests.put(POSTS_URL, this.generateNewPostContent(id, newContent), headers)
    }
}
module.exports = new JSONPlaceholder()