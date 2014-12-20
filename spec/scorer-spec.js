describe("Scorer", function() {

  it("scores 1 per char with empty matcher", function() {
    expect(SemiDemi.score( [ ], "abc" )).toBe(3);
  });

  it("score 0 when whole string is fuzzy", function() {
    expect(SemiDemi.score( [ { fuzzy: "abc" } ], "abc" )).toBe(0);
  });

  it("disallowed does not affect the score", function() {
    expect(SemiDemi.score( [ { fuzzy: "abc" }, { disallowd: "def" } ], "abc" )).toBe(0);
  });

  it("score 0 when whole string is matched by two fuzzy items", function() {
    expect(SemiDemi.score( [ { fuzzy: "ab" }, { fuzzy: "c" } ], "abc" )).toBe(0);
  });

});