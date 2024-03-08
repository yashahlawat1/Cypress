// Define a test suite named 'Template Spec' using the 'describe' function.
describe('Template Spec', async () => {

  // Define a test case within the test suite to verify if properties containing tags are updated.
  it('Verifies if properties containing tags are updated', () => {

    // Suppress uncaught exceptions to prevent Cypress from failing the test.
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    // Visit the specified URL.
    cy.visit('https://lite-qa6.sprinklr.com/calendar?startDate=2024-03-06&numOfDays=1&view=day');

    // Type the email address into the email input field.
    cy.get('[id="email"]').type("ishan.bais+qa6socialadmin@sprinklr.com")

    // Click the submit button for the email form.
    cy.get('[data-testid="email-submit"]').click()

    // Type the password into the password input field.
    cy.get('[id="password"]').type('ECsh9shv$2XG7cnG')

    // Click the login button.
    cy.get('[data-testid="login"]').click()

    // Click on the first tag element on the page.
    cy.get('[data-spaceweb="tag"]', {timeout: 120000}).first().click()

    // Assert that there is at least one tag element present.
    cy.get('[data-testid="tags-value-box"] span', {timeout: 120000}).should("have.length.gt", 0);

    // Assert that the "Yash" tag exists among all the tags.
    cy.get('[data-testid="tags-value-box"] span', {timeout: 120000}).contains("Yash").should("exist");

  });
});



