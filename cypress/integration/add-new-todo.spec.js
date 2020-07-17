describe("My first test managing todos", function() {
	it("Button click adds new todo", () => {
		cy.visit("http://localhost:8080");
		cy.screenshot();
		cy.get("#new-task").type("Hello");
		cy.screenshot();
		// cy.pause()

		cy.get("#add-task").click();
		cy.get(".todo").contains("Hello");
		cy.screenshot();
	});

	it("Clickin a todo cross it out", () => {
		// cy.pause()
		cy.wait(1000);

		cy.get(".todo")
			.contains("Hello")
			.click();
		cy.get(".todo")
			.contains("Hello")
			.should("have.class", "completed");
	});

	it("Cross button deletes a todo", () => {
		// cy.pause()
		cy.wait(2000);

		cy.get(".delete-todo").click();
		cy.get(".todo").should("not.contain", "Hello");
	});
});
