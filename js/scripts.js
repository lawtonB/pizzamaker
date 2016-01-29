function Pizza (ordersize, topping) {
  this.ordersize = ordersize;
  this.topping = topping;
}

Pizza.prototype.sizeprice = function() {
    var ordersize = 0;
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
  if (this.ordersize === "cheese"){
    return this.ordersize
  } else if (this.ordersize === "pepperoni"){
    return this.ordersize + 2;
  } else if (this.ordersize === "portobello"){
    return this.ordersize + 3;
  }
}


    // if (this.topping === "pepperoni"){
    //   var cost = cost + 2
    // } else if (this.topping === "cheese") {
    //   var cost = cost
    // }
    // return cost;
  // }

$(document).ready(function() {
$("form#pizza").submit(function(event) {
  event.preventDefault();

  var inputSize = $("select#size_choice").val();
  var inputTopping = $("select#topping_choice").val();
  var newPizza = new Pizza (ordersize, topping);

  $(".price").append("$" + newPizza.price())  ;


  });
});
