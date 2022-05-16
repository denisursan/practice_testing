const { expect } = require("chai").use(require("chai-json-schema"));
const axios = require("axios");

describe("GraphQL Requests", async () => {
  it("Get countries", async () => {
    const query = `query getCountries($input: LocationInput!) {
        country(input: $input) {
          name
          type
          cities {
            name
            slug
          }
          jobs {
            slug
            company {
              slug
            }
          }
        }
      }`;

    const variables = {
      input: { slug: "germany" },
    };

    axios({
      url: "https://api.graphql.jobs/",
      method: "post",
      data: {
        query: query,
        variables,
      },
    }).then((res) => {
      console.log(res.data.data.country.jobs);
      expect(res.status).to.eq(200);
      expect(res.statusText).to.eq("OK");
      expect(res.data.data.country.name).to.eq("Germany");
      expect(res.data.data.country.type).to.be("country");
      expect(res.data.data.country.cities).to.have.lengthOf(2);
    });
  });

  it("Get jobs", async () => {
    const query = `query getJobs($inputJobs: JobInput!) {
        job(input: $inputJobs){
          title
          description
        }
      }`;

    const variables = {
      inputJobs: {
        jobSlug: "backend-engineer",
        companySlug: "prisma",
      },
    };

    axios({
        url: "https://api.graphql.jobs/",
        method: "post",
        data: {
          query: query,
          variables,
        },
      }).then((res) => {
        console.log(res.data.data.country.jobs);
        expect(res.status).to.eq(200);
        expect(res.statusText).to.eq("OK");
        expect(res.data.data.country.jobs).to.have.lengthOf(4);
      });
  });
});
