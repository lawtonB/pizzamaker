describe('Movie', function() {
  it("creates a new movie object with given properties", function() {
    var testMovie = new Movie("chinatown", "R" );
    expect(testMovie.movieName).to.equal("chinatown");
    expect(testMovie.rating).to.equal("R");
    expect(testMovie.time).to.eql([]);
  });
});

describe('user', function() {
  it("takes users age", function() {
    expect(user(12)).to.equal("pgOnly");
  });
});

describe('Ticket', function() {
  it("generates price from ticket object", function() {
  var testTicket = new Ticket(13, "12.00", "Wizard of Oz Anniversary Show")
    expect(testTicket.price()).to.equal(14);
  });
});
