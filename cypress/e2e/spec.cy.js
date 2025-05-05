describe("Main page for QuickBus", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-qa="main-header"]').as("mainHeader");

    cy.get('[data-qa="brand-btn"]').as("transportBtns");
    cy.get('[data-qa="brand-btn"]').first().as("novaBtn");
    cy.get('[data-qa="brand-btn"]').eq(1).as("vexelBtn");
    cy.get('[data-qa="brand-btn"]').last().as("stellarBtn");
  });
  it("QuickBus Header should be visible and transport options are styled", () => {
    cy.get("@mainHeader").should("have.text", "QuickBus");
    cy.get("@mainHeader").should("have.css", "color", "rgb(90, 0, 208)");

    cy.get("@transportBtns").should("have.length", 3);
    cy.get("@novaBtn").should("be.visible");
    cy.get("@vexelBtn").should("be.visible");
    cy.get("@stellarBtn").should("be.visible");
    cy.get('[data-qa="ph-rocket"]').should(
      "have.css",
      "color",
      "rgb(81, 219, 31)"
    );
    cy.get('[data-qa="ph-bus"]').should(
      "have.css",
      "color",
      "rgb(255, 108, 10)"
    );
    cy.get('[data-qa="ph-airplane-taxiingg"]').should(
      "have.css",
      "color",
      "rgb(214, 66, 255)"
    );
  });
});
