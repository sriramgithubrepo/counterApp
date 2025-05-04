# Test Plan: Counter App

## Purpose
Verify correct behavior of the positive-only counter.

## Test Cases
1. Verify the initial state has Counter field with value as 0 and buttons Increment and Decrement
2. Click decrement and verify the value does not go below 0(currently it does and negative counter values are displayed)
3. Verify that from initial state with count value as 0, when increment button is clicked once the value increases by 1
4. Verify that from initial state with count value as 0, when increment button is clicked multiple times the value increases based on the number of clicks
5. Verify that when the count has a positive value, when decrement button is clicked once the value decreases by 1
6. Verify that when the count has a positive value, when decrement button is clicked multiple times the value decreases based on the number of clicks and does not go below value 0
7. Verify that the counter value is reset to initial value of 0 when browser is refreshed/reloaded
8. Verify that right click on Increament, Decrement does not increase or decrease the count value