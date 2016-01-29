
function Ticket(age, time, movieName){
  this.age = age;
  this.time = time;
  this.movieName = movieName;
}

Ticket.prototype.price = function() {
  var cost = 12
    if (this.age >= 13 && this.age <= 55){
      var cost = cost;
      console.log("hey, i'm 13!")
    }else {
      var cost = cost - 2;
    }

    if (this.time === "12.00" ) {
      var cost = cost - 2;
      console.log("hey, i'm 12:00!")
    }else {
      var cost = cost;
    }

    if (this.movieName = "Wizard of Oz Anniversary Show") {
      var cost = cost + 4;
      console.log("hey, i'm OZ!")
    }else {
      var cost = cost;

    }
    return cost;
}


$(document).ready(function() {

$("form#movie").submit(function(event) {
  var inputMovie = $("select#movie_choices").val();
  var inputTime = $("select#time_choices").val();
  var inputAge = $("input#age").val();
  var newTicket = new Ticket(inputAge, inputTime, inputMovie);

  $(".price").append("$" + newTicket.price())  ;

 event.preventDefault();
  });
});
