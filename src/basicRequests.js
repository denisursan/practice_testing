const axios = require('axios');

class requests {

    get = async (url, headers) => {
        try{
            return await axios.get(url, { 'headers': headers }) 
        }catch (err){
            console.log(err) 
        }
    }

    post = async (url, body, headers) => {
        try{
            return await axios.post(url, body, { 'headers': headers })
        }catch (err){
            console.log(err)
        }
    }

    put = async (url, body, headers) => {
        try{
            const response = await axios.put(url, body, { 'headers': headers })
            return response
        }catch (err){
            console.log(err)
        }
    }

    delete = async (url, headers) => {
        try{
            const response = await axios.delete(url, { 'headers': headers })
            return response
        }catch (err){
            console.log(err)
        }
    }
}
module.exports = new requests()