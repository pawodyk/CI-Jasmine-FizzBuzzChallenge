describe("FizzBuzz Challenge", function() {
    describe("Testing the output", function() {
        //numbers divisible by 3 and 5 :
        it("input 45 should return FizzBuzz", function() {
           expect(fizzBuzz(45)).toBe("FizzBuzz");
        });

        //numbers divisible by 3 :
        it("input 9 should return Fizz", function () {
            expect(fizzBuzz(9)).toBe("Fizz");
        });

        //numbers divisible by 5 :
        it("input 25 should return Buzz", function () {
            expect(fizzBuzz(25)).toBe("Buzz");
        });

        //numbers not divisible by 3 and 5 :
        it("input 7 should return 7", function () {
            expect(fizzBuzz(7)).toBe(7);
        });
    });
});