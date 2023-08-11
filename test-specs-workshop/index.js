/*

Unit Test 1 - multiplication

Expectations
Happy paths:
- Expect multiplication(x, y) to be a number
- Expect multiplication(x, y) to return the product of x and y
- Expect x and y to both be numbers
- Expect multiplication(2, 5) to equal 10
- Expect multiplication(2.5, 3) to equal 7.5

Unhappy paths:
- Expect multiplication("hi", "hello") to be an error
- Expect multiplication("hi", 2) to be an error
- Expect multiplication(undefined, 3) to be an error


Unit Test 2 - concatOdds

Expectations
Happy paths:
- Expect concatOdds([4, 5, 6], [7, 8, 11, 15, -4, -3, -3]) to return a single array of odd numbers in ascending order
- Expect concatOdds([4, 5, 6], [7, 8, 11, 15, -4, -3, -3]) to return [-3, 5, 7, 11, 15]
- Expect concatOdds([4, 5, 6], [7, 8, 11, 15, -4, -3, -3]) to return only one item if there are duplicates

Unhappy paths:
- Expect concatOdds([4, 5, "hi"], [7, 8, 11, 15, -4, -3, -3]) to give an error
- Expect concatOdds([4, 5, 0], [7, 8, 11, 15, -4, -3, 0]) to give an error
- Expect concatOdds([], []) to give an error
- Expect concatOdds([4, 5, 6], [7, 8, 11, 15, -4, -3, -3], [4, 5, 6, 7]) to give an error


Functional Test - shopping cart checkout

Expectations
Happy paths:
- When the user presses the 'shopping cart' button, the website should redirect the user to the shopping cart with their items and a total amount
- When the user presses 'continue to checkout' the website should ask the user to click 'continue as guest' or 'log-in if you already have an account'
- When the user presses 'continue as guest' the website should redirect to a page with a form for address, billing information, and shipping
- When the user presses 'log-in if you already have an account' the website should redirect the user to input their login information
- When the user enters all of their address, billing, and shipping preferences, the 'complete checkout' button should un-fade and the user should be able to click on it
- When the user clicks the 'complete checkout' button, the website should redirect to a page that says 'thanks for shopping with us, here is your order confirmation number: ######'

Unhappy paths:
- If the shopping cart is empty, the 'shopping cart' button should be faded out
- If the user tries to press the faded out 'shopping cart' button, the website should show a pop-up alert that says 'please add items to your cart'
- If the user inputs the wront login information, the website should give a pop-up alert saying 'incorrect login, please try again or reset your password'
- If the user inputs the wrong password three times, the website should redirect the user to change their password
- If the user inputs an unacceptable/incomplete address, billing, or shipping information and then presses 'complete checkout' the form boxes should turn red and require the user to change the text

*/
