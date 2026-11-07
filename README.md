# series-homework

About the Project
This project uses JavaScript to work with TV series, seasons, and episodes.
We use functions to search, filter, sort, and update data without changing the original data.


How to Run the Tests?
Run this command in the terminal:

node check.js

This command checks if the functions work correctly.


Questions

1. Why is { ...show } not enough in addEpisode?
Because it only copies the main object.
The arrays and objects inside are still connected to the original.
We need to copy them too, so we don't change the original data.

3. Why didn't using ... fix bug #3?
Because push() already changed the original array before we copied the object.
Using ... only copies the main object, not the arrays inside it.
We should create a new array instead of using push().
