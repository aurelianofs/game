describe('Basic express routes', () => {

  it('Test WebSockets Request', () => {

    const config = {
      url: "ws://localhost:3000/"
    };

    cy.streamRequest(config, {}).then(results => {
      const result = results && results[0];
      expect(result).to.not.be.undefined;
      expect(result).to.have.property("action");
      expect(result).to.have.property("data");
    })

  })

})
