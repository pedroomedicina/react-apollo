/// <reference types="Cypress" />

describe("The New Links Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });

  it("displays header", () => {
    cy.get("div.flex.pa1.justify-between.nowrap.orange");
  });
});
