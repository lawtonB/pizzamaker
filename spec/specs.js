describe('pizza', function() {
  it("creates a new pizza object with given properties", function() {
    var testPizza = new Pizza("large", "pepperoni" );
    expect(testPizza.ordersize).to.equal("large");
    expect(testPizza.topping).to.equal("pepperoni");
    // expect(testPizza.time).to.eql([]);
  });
});

describe('sizeprice', function() {
  it("returns pizza cost based on size", function() {
    var testPizza = new Pizza("small", "cheese");
    expect(testPizza.sizeprice()).to.equal(6);
    // expect(testPizza.sizeprice()).to.equal(15);
  });
});

describe('toppingprice', function() {
  it("returns pizza cost based on topping", function() {
    var testPizza = new Pizza("small", "portobello");
    expect(testPizza.sizeprice()).to.equal(6);
  });
});

// describe('toppingprice', function() {
//   it("calculates pizza cost based on topping", function() {
//     var testPizza1 = new Pizza("small");
//     expect(testPizza1.sizeprice).to.equal(6);
//   });
// });

//
// describe('Ticket', function() {
//   it("generates price from ticket object", function() {
//   var testTicket = new Ticket(13, "12.00", "Wizard of Oz Anniversary Show")
//     expect(testTicket.price()).to.equal(14);
//   });
// });
