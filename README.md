# lab-02a-nametag-v2
Alchemy Foundations

**Goal**: The user should be able to type into the input and, when they click a button, change the name to whatever they want.

We need to see on the screen/manipulate:
1) Name Tag
1) Text input
1) Button

Let's go _grab_ everything we need:
1) grab the name
    - Validate by logging out
1) grab the input
    - Validate by logging out
1) grab the button
    - Validate by logging out

_When_ do we want this to happen?
When the user clicks the button:

OnClick of the button:
1) Validate that the button is listening
    - Log out the current time on click
1) Get the user input from the text input element
    - log out the userInput
1) Change the `textContent` property of the name element 
    - change it it 'whatever' first, to validate our process
    - change it to the userInput


The Process
===

We always do the same thing when building apps:

1) We grab some DOM elements.
1) We add event listeners to some of those elements
1) In response to user actions, we _do things_ to those elements.