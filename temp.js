const testObjectArr = [
    {
        authors: ["LEGO"],
        description:
            "The Wizarding World is full of magical details and interesting characters! Join Harry, Ron and Hermione as they encounter the delights of Diagon Alley, tricky Cornish pixies and the majestic Ministry of Magic. Help Snape keep a close eye on the trio in this LEGO Harry Potter Search and Find book. Then, go back and see if you can spot even more magical things!",
        imageLinks: {
            smallThumbnail:
                "http://books.google.com/books/content?id=_1TjygEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail:
                "http://books.google.com/books/content?id=_1TjygEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },

        title: "LEGO Harry Potter: a Magical Search and Find",
    },
    {
        authors: ["LE"],
        description: "The Wizard ",
        imageLinks: {
            smallThumbnail:
                "http://books.google.com/books/content?id=_1TjygEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail:
                "http://books.google.com/books/content?id=_1TjygEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },

        title: "Harry Potter: a Magical Find",
    },
];

const newArr = testObjectArr.map((value) => {
    const title = value.title;
    const authors = value.authors;
    const description = value.description;
    const thumbnail = value.imageLinks.thumbnail;
    const subtitle = value.subtitle;
    return [thumbnail, title, authors, description, subtitle];
});

console.log(newArr[0][0]);
