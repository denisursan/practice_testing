/// <reference types="cypress" />
describe('Uploading files ', () => {
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click()

    });
    it('upload a file ', () => {

        cy.fixture('image.png', "base64").then(fileContent => {
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "image.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        })
        cy.get('#submit-button').click()
        cy.on('window:alert', (t) => {
            //assertions
            expect(t).to.include('Your file has now been uploaded!');
        })
    });
    it('upload no file', () => {
        // const stub = cy.stub()
        // cy.on('window:confirm', stub)
        cy.get('#submit-button').click()
        cy.on('window:alert', (t) => {
            //assertions
            expect(t).to.include('You need to select a file to upload!');
        })
    });
});
