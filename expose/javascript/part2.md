1. 3 -  the i is declared as a var, so it will stay in the scope. it will print 3 because it is after the last iteration, when i = prices.length
2. 150 -  the discountedPrice variable is within the function scope. it will print 150 because it is (the last price in the array * 0.5).
3. 150 - because the discountedPrice variable is within the function scope. it will print 150 since it is the last price calculated, and it is equal to the discountedPrice.
4. This function will return an array with the values [50, 100, 150]. This is each of the original values with a 50% reduction. 100 -> 50, 200 -> 100, 300 -> 150
5. This will throw an error, since i is now out of scope at line 12.
6. This will throw an error, since the discountedPrice is out of scope.
7. This will print 150. Since finalPrice is still in scope, it will be able to print. It will have the same value as in question 3.
8. This will return the same array [50, 100, 150], since the return variable is in scope, and returning bypasses the scope via copy.
9. Line 11 will throw an error since it is out of scope.