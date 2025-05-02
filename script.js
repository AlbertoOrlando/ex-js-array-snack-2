const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

const longBooks = books.filter((book) => {
    return book.pages > 300
})

console.log(longBooks);

const longBooksTitles = longBooks.map((longBook) => {
    return longBook.title
})

console.log(longBooksTitles);



const availableBooks = books.filter((book) => {
    return book.available === true
})

console.log(availableBooks);

const disountedBooks = availableBooks.map((discountedBook) => {
    let sconto = parseFloat(discountedBook.price) * 0.2
    let prezzoScontato = parseFloat(discountedBook.price) - sconto
    discountedBook.price = prezzoScontato
    return discountedBook
})

console.log(disountedBooks);

const fullPricedBook = disountedBooks.find((discountedBook) => {
    let prezzo = parseFloat(discountedBook.price)
    return Number.isInteger(prezzo)
})

console.log(fullPricedBook);



