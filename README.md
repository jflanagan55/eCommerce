Show store that allows user to select products and add them to a cart before checking out and passing form validation. First large app I made with React. This project reinforced and demonstrated the React fundamentals(passing state/props, using hooks, how to structure a react application). Additionally, this was a good introduction to Redux. However, the largest takeaway I had from creating the site is using Regular Expressions. The validation for the checkout form at the end is made by matching each form input to their own respective regular expression. This demonstrated to me how powerful reg ex matching can be. Moreover, it showed me some of the challenges that can occur when using regex (e.g. validating a street address). The form validation is by no means perfect but I did want to use regular expressions for the benefit of my learning. Below are the regular expressions in simpler terms:

CVV: 3 or 4 digits

Zip Code: Exactly 5 digits

Credit Card: In between 13-19 digit

Phone Number: Exactly 10 digits

Email: Cannot start with white space character, must have @, @ cannot be followed by a whitespace character, the string following the @ character can contain anything and must be followed by a ., the period can only be followed by a-z characters

First Name: Must start and end with a letter. Inner portion allows for A-z characters, spaces, apostrophes, and hyphens.
            Space: must be followed by letter or apostrophe
            Apostrophe & Hyphen: must be followed by space or letter
    

Last Name & City: Must start and end with a letter. Inner portion allows for A-z characters, spaces, apostrophes, hyphens, and periods.
            Space: must be followed by letter or apostrophe
            Apostrophe & Hyphen: must be followed by space or letter
            Period: must be followed a space and that space cannot be followed by an apostrophe


Street Address: Must start with a string of numbers, must end with an A-z character.  Inner portion allows for A-z characters, spaces, apostrophes, hyphens, and periods.
            Space: must be followed by letter or apostrophe
            Apostrophe & Hyphen: must be followed by space or letter
            Period: must be followed a space and that space cannot be followed by an apostrophe