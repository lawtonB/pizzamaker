// business logic

function Pizza (ordersize, topping) {
  this.ordersize = ordersize;
  this.topping = topping;
  this.fullprice = null;
}

Pizza.prototype.sizeprice = function() {
    if (this.ordersize === "small"){
      return 6;
    } else if (this.ordersize === "medium") {
      return 8;
    } else if (this.ordersize === "large"){
      return 10;
    } else
      return 0;
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

Pizza.prototype.fullprice = function() {
  return this.fullprice = this.sizeprice() + this.toppingprice();
}

Pizza.prototype.fullname = function() {
  return this.ordersize + " " + this.topping + " " + "pizza" ;
}

// front end logic

$(document).ready(function() {
$("form#pizza").submit(function(event) {
  event.preventDefault();

  var inputSize = $(this).find("select#size_choice").val();
  var inputTopping = $(this).find("select#topping_choice").val();
  var newPizza = new Pizza (inputSize, inputTopping);
  // var newprice = new pizza (this.fullprice);

  $(".showpizza").text(newPizza.fullname());
  $(".showprice").text(this.fullprice());

  });
});
