describe('Template Spec', async () => {
  it('Verifies if properties containing tags are updated', () => {

    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    cy.visit('https://lite-qa6.sprinklr.com/calendar?startDate=2024-03-06&numOfDays=1&view=day');

    cy.get('[id="email"]').type("ishan.bais+qa6socialadmin@sprinklr.com")
    cy.get('[data-testid="email-submit"]').click()
    cy.get('[id="password"]').type('ECsh9shv$2XG7cnG')
    cy.get('[data-testid="login"]').click()

    cy.get('[data-spaceweb="tag"]', {timeout: 120000}).first().click()

    // Asserting that at least one tag exists
    cy.get('[data-testid="tags-value-box"] span', {timeout: 120000}).should("have.length.gt", 0);

    // Asserting that "Yash" tag exists among all the tags
    cy.get('[data-testid="tags-value-box"] span', {timeout: 120000}).contains("Yash").should("exist");

  });
});


