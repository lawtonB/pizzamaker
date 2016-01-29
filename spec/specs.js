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

describe('fullprice', function() {
  it("returns full pizza price", function() {
    var testPizza = new Pizza("large", "portobello");
    expect(testPizza.fullprice()).to.equal(13);
  });
});

describe("fullname", function() {
  it("returns full name of pizza", function(){
  var testPizza = new Pizza("large", "portobello");
  expect(testPizza.fullname()).to.equal("large portobello pizza");
  });
});
//
// describe("fullprice", function() {
//   it("returns complete value of pizza", function(){
//     var testPizza = new Pizza("large", "portobello");
//     expect(testPizza.fullprice()).to.equal(13);
//   });
// });

// describe('toppingprice', function() {
//   it("calculates pizza cost based on topping", function() {
//     var testPizza1 = new Pizza("small");
//     expect(testPizza1.sizeprice).to.equal(6);
//   });
// });
