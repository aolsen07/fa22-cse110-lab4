1. 3 -  the i is declared as a var, so it will stay in the scope. it will print 3 because it is after the last iteration, when i = prices.length
2. 150 -  the discountedPrice variable is within the function scope. it will print 150 because it is (the last price in the array * 0.5).
3. 150 - because the discountedPrice variable is within the function scope. it will print 150 since it is the last price calculated, and it is equal to the discountedPrice.
4. This function will return an array with the values [50, 100, 150]. This is each of the original values with a 50% reduction. 100 -> 50, 200 -> 100, 300 -> 150
5. This will throw an error, since i is now out of scope at line 12.
6. This will throw an error, since the discountedPrice is out of scope.
7. This will print 150. Since finalPrice is still in scope, it will be able to print. It will have the same value as in question 3.
8. This will return the same array [50, 100, 150], since the return variable is in scope, and returning bypasses the scope via copy.
9. Line 11 will throw an error since it is out of scope.
10. It will print 3, since it is defined in scope.
11. This will again return [50, 100, 150]. You are able to initialize a const with an array, since it will be set as an object that can still be pushed to.
12. 
    - a. student.name
    - b. student["Grad Year"]
    - c. student.greeting()
    - d. student["Favorite Teacher"].name
    - e. student.courseLoad[0]
13. 
    - a. 5, since 3 is converted
    - b. 1, the 3 is converted
    - c. 3, the null becomes 0
    - d. 3, both are converted to become 3 + 0
    - e. 4, true becomes 1
    - f. 0, false becomes 0 and null becomes 0
    - g. NaN, error from undefined
    - h. NaN, error from undefined
14. 
    - a. True, converts to 2 > 1
    - b. false, becomes string comparison, 1 comes before 2 in the alphabet
    - c. True, '2' converts to int 2, and is equal
    - d. false, doesn't convert types
    - e. false, converts to 1 == 2, which is false
    - f. true, because the Boolean(2) evaluates to true, as the number != 0 makes it true
15. == checks for equality after conversion, === does not perform conversion
16. :)
17. For each iteration of the for loop, the number is passed through the doSomething function, which will multpily the number by 2. Then, the number is pushed on newArr. 1 * 2 = 2, 2 * 2 = 4, 3 * 2 = 6. So newArr becomes [2, 4, 6] and is returned as the result. 
18. :o
19. 1 4 3 2