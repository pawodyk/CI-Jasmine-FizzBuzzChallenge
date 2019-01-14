describe("FizzBuzz Challenge", function() {
    describe("Testing the output", function() {
        it("input 45 should return FizzBuzz", function() {
           expect(fizzBuzz(45)).toBe("FizzBuzz");
        });
        it("input 9 should return FizzBuzz", function () {
            expect(fizzBuzz(9)).toBe("Fizz");
        });
        it("input 25 should return FizzBuzz", function () {
            expect(fizzBuzz(25)).toBe("Buzz");
        });
        it("input 7 should return FizzBuzz", function () {
            expect(fizzBuzz(7)).toBe(7);
        });
    });
});