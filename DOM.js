import { getBooks } from "./script.js";

const searchBtn = document.querySelector("#searchBtn");
const input = document.querySelector("#searchBar");
const bookResults = document.querySelector(".books");
const body = document.querySelector("body");
// click button -> getbooks
// also render grid? 2 functions

searchBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const inputTerm = input.value.split(" ").join("+");
    const booksData = await getBooks(inputTerm);

    while (bookResults.lastChild) {
        bookResults.removeChild(bookResults.lastChild);
        body.classList.remove("bodyAlt");
    }

    booksData.forEach((book) => {
        const { imageLinks, authors, title, description, subtitle } =
            book.volumeInfo;

        const bookElement = document.createElement("div");
        bookElement.classList.add("book");

        const thumbnailElement = document.createElement("img");
        if (imageLinks) {
            const { thumbnail } = imageLinks;
            thumbnailElement.src = thumbnail;
        } else {
            thumbnailElement.src = "https://placekitten.com/128/180";
        }
        thumbnailElement.alt = `Cover of ${book.volumeInfo.title}`;
        thumbnailElement.classList.add("book__thumbnail");
        bookElement.appendChild(thumbnailElement);

        const titleElement = document.createElement("h2");
        titleElement.textContent = title;
        titleElement.classList.add("book__title");
        bookElement.appendChild(titleElement);

        if (subtitle) {
            const subtitleElement = document.createElement("h3");
            subtitleElement.textContent = subtitle;
            subtitleElement.classList.add("book__subtitle");
            bookElement.appendChild(subtitleElement);
        }

        const authorsElement = document.createElement("p");
        if (authors) {
            authorsElement.textContent = authors.join(", ");
        } else {
            authorsElement.textContent = "(Authors not found)";
        }
        authorsElement.classList.add("book__authors");
        bookElement.appendChild(authorsElement);

        const descriptionElement = document.createElement("p");
        if (description) {
            descriptionElement.textContent = description;
        } else {
            descriptionElement.textContent = "(No description found)";
        }
        descriptionElement.classList.add("book__description");
        bookElement.appendChild(descriptionElement);

        bookResults.appendChild(bookElement);
    });
    body.classList.add("bodyAlt");
});
