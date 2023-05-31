# google-books

## Requirements / Purpose

-   Create a Google books search engine, that takes in a search term and returns a display of matching books using the Google books API, using Javascript
-   Created during Nology training program to explore and understand how APIs work using fetch and async/await

---

## Design Goals / Approach

-   Styling and user experience were considered important
-   Should account for missing information
-   Each book container should be standardised, display in neat grid
-   Searching should remove previous results and display new results instead
-   Able to account for different screen sizes

---

## Features

-   Search bar retains search term on submit
-   Contains default placeholders for missing information of books, e.g. cover image, subtitle, description
-   Display is reactive to screen sizes, with varying numbers of columns

---

## Known issues

-   Contains commented out code from previous iterations, as a record of problem solving approach
-   Descriptions are often too long, clogs up the display

---

## Future Goals

-   Rewrite the same thing using React instead
-   Add 'read more' functionality to the descriptions, to condense the display size

---

## Change logs

### 31/05/2022

-   Adding padding to descriptions for easier viewing


