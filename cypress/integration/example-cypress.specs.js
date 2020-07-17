describe("example-cypress", function() {
	it("Visit cypress", function() {
		cy.visit("https://example.cypress.io");
		cy.pause();
		cy.contains("type").click();
		cy.url().should("include", "/commands/actions");

		cy.get("#email1")
			.type("example@example.com")
			.should("have.value", "example@example.com");
	});
});
