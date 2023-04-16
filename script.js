export const getBooks = async (searchTerm) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    const data = await response.json();
    return data.items;
};

// const booksData = await getBooks("search")

// export const extractData = (data) => {
//     const { title, authors, description, imageLinks, subtitle } =
//         data.items[0].volumeInfo;
//     return { title, authors, description, imageLinks, subtitle };
// };

// export const extractData2 = (data) => {
//     const title = data.items[0].volumeInfo.title;
//     const authors = data.items[0].volumeInfo.authors;
//     const description = data.items[0].volumeInfo.description;
//     const thumbnail = data.items[0].volumeInfo.imageLinks.thumbnail;
//     const subtitle = data.items[0].volumeInfo.subtitle;
//     return [thumbnail, title, authors, description, subtitle];
// };

// for (let i = 0; i < data.items.length; i++) {
//     bookResults.innerHtml += "<h2>" + data.items[i].volumeInfo.title + "</h2>";
// }

// data.items.forEach((book) => {
//     bookResults.innerHTML += "<h2>" + book.volumeInfo.title + "</h2>";
// });

// "items": [
//   {
//     "selfLink": "https://www.googleapis.com/books/v1/volumes/MFBSILD-4gsC",
//     "volumeInfo": {
//       "title": "Fifth-grade Students' Search for Information in a Textbook",
//       "authors": [
//         "Mariam Jean Dreher"
//       ],
//       "description":
//        "imageLinks": {thumbnail: }

// each book in the grid should have an image, author, title and description
