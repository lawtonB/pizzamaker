describe('pizza', function() {
  it("creates a new pizza object with given properties", function() {
    var testPizza = new Pizza("large", "pepperoni" );
    expect(testPizza.ordersize).to.equal("large");
    expect(testPizza.topping).to.equal("pepperoni");
    // expect(testPizza.time).to.eql([]);
  });
});

// describe('user', function() {
//   it("takes users age", function() {
//     expect(user(12)).to.equal("pgOnly");
//   });
// });
//
// describe('Ticket', function() {
//   it("generates price from ticket object", function() {
//   var testTicket = new Ticket(13, "12.00", "Wizard of Oz Anniversary Show")
//     expect(testTicket.price()).to.equal(14);
//   });
// });
