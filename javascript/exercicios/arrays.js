
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker ",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason ",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalBooksCategory = booksByCategory.length;
console.log("existem " + totalBooksCategory + " categorias de livros")
for(let category of booksByCategory){
    console.log(category.category);
    console.log(category.books.length)
}
/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

function countAuthors(){
    let authors = [];
    
    for (let category of booksByCategory){
        for(let book of category.books){
            if (authors.indexOf(book.author) == -1){
                authors.push(book.author);
            }
        }
    }
console.log("total de autores: " + authors.length);
}

function booksByAuthor(nome){
   let booksOfAuthor = [];
   for (let category of booksByCategory){
       for (let book of category.books){
           if (String(book.author) == nome){
               booksOfAuthor.push(book.title)
           }
       }
   }
   console.log('estes são os livros de ' + nome + ' encontrado(s): ')
   console.log(booksOfAuthor)
}

countAuthors();
booksByAuthor('Augusto Cury');











