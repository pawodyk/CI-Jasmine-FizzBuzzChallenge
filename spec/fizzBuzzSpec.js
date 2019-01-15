describe("FizzBuzz Challenge", function() {
    describe("Testing the output", function() {
        //numbers divisible by 3 and 5 :
        it("input 15 should return FizzBuzz", function () {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("input 45 should return FizzBuzz", function() {
           expect(fizzBuzz(45)).toBe("FizzBuzz");
        });
        it("input 375 should return FizzBuzz", function () {
            expect(fizzBuzz(375)).toBe("FizzBuzz");
        });
        it("input 135 should return FizzBuzz", function () {
            expect(fizzBuzz(135)).toBe("FizzBuzz");
        });

        //numbers divisible by 3 :
        it("input 9 should return Fizz", function () {
            expect(fizzBuzz(9)).toBe("Fizz");
        });
        it("input 81 should return Fizz", function () {
            expect(fizzBuzz(81)).toBe("Fizz");
        });
        it("input 729 should return Fizz", function () {
            expect(fizzBuzz(729)).toBe("Fizz");
        });

        //numbers divisible by 5 :
        it("input 25 should return Buzz", function () {
            expect(fizzBuzz(25)).toBe("Buzz");
        });
        it("input 125 should return Buzz", function () {
            expect(fizzBuzz(125)).toBe("Buzz");
        });
        it("input 15625 should return Buzz", function () {
            expect(fizzBuzz(15625)).toBe("Buzz");
        });

        //numbers not divisible by 3 and 5 :
        it("input 7 should return itself", function () {
            expect(fizzBuzz(7)).toBe(7);
        });
        it("input 49 should return itself", function () {
            expect(fizzBuzz(49)).toBe(49);
        });
        it("input 56 should return itself", function () {
            expect(fizzBuzz(56)).toBe(56);
        });
        it("input 1568 should return itself", function () {
            expect(fizzBuzz(1568)).toBe(1568);
        });
    });
});