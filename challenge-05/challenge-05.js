/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = [1, 'Frontend', true, 10, {Nome: "Ricardo"}];
meuArray;


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
//Funcao literal
function minhaFuncao(parametroArray){
  return parametroArray;  
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
function minhaFuncao(parametroArray){
  return parametroArray[1];  
}
minhaFuncao(meuArray);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function minhaFuncao(parametroArray, indice){
  return parametroArray[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var meuArray = [1, 'Frontend', true, 10, "Ricardo Miranda"];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
function minhaFuncao(parametroArray, indice){
  return parametroArray[indice];
}
minhaFuncao(meuArray, 1)


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName){
  var allBooks = {
    'O caminho da paz': {
      quantidadePaginas: 3,
      autor: "Ricardo Miranda",
      editora: "Abril" 
    },
    
    'O pequeno Principe':{
      quantidadePaginas: 5,
      autor: "Ana Maria",
      editora: "Época"
    },
    
    'Fortaleza Digital':{
      quantidadePaginas: 9,
      autor: "Gabriela Silva",
      editora: "Veja"
    }
  };
  
  if(!bookName){
    return allBooks;
  }
  
  return allBooks[bookName];
  
  
  // Outra forma com operador ternário
  return !bookName ? allBooks : allBooks[bookName];
  
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro Fortaleza Digital tem " + book('Fortaleza Digital').quantidadePaginas + " páginas");

// Opçao melhorada
var bookName = "O pequeno Principe";
console.log("O livro " + bookName + " tem " + book(bookName).quantidadePaginas + " páginas");


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O autor do livro " + bookName +  " é " + book(bookName).autor);


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + bookName +  " foi publicado pela editora " + book(bookName).editora);

