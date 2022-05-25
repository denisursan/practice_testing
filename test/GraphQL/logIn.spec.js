const { expect } = require("chai").use(require("chai-json-schema"));
const axios = require("axios");

describe("Posts API Testing", async () => {

    async function returnToken() {
        const tok = await axios({
            url: "https://idobata.io/oauth/token",
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            params: {
                "grant_type": "password",
                "username": "ursandenis96@yahoo.com",
                "password": "test123D"
            }
        }).then((res) =>
           console.log(res)
             
        )
        return tok
    };
    it.only("Request log in", async () => {
        returnToken()



    });

})
