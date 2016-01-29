// business logic

function Pizza (ordersize, topping) {
  this.ordersize = ordersize;
  this.topping = topping;
  // this.pizzaPrice = null;
}

Pizza.prototype.sizeprice = function() {
    if (this.ordersize === "small"){
      return 6;
    } else if (this.ordersize === "medium") {
      return 8;
    } else if (this.ordersize === "large"){
      return 10;
    } else
      return 1;
    }

Pizza.prototype.toppingprice = function() {
  if (this.topping === "cheese"){
    return 0;
  } else if (this.topping === "pepperoni"){
    return 2;
  } else if (this.topping === "portobello"){
    return 3;
  }
}

Pizza.prototype.fullname = function() {
  return this.ordersize + " " + this.topping + " " + "pizza" ;
}


Pizza.prototype.fullprice = function() {
  return fullprice = this.sizeprice() + this.toppingprice();
}
// front end logic

$(document).ready(function() {
$("form#pizza").submit(function(event) {
  event.preventDefault();
  debugger;
  var inputSize = $(this).find("select#size_choice").val();
  var inputTopping = $(this).find("select#topping_choice").val();
  var newPizza = new Pizza (inputSize, inputTopping);
  // var newprice = new pizza (this.fullprice);
  // var total = newPizza.fullPrice;
  // var fullprice = this.sizeprice + this.toppingprice;

  $(".showpizza").text(newPizza.fullname());
  // $(".showprice").text(newPizza.fullPrice());

  });
});
