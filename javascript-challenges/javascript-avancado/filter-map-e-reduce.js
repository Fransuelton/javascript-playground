// Desafio: Desenvolva um sistema de gestão de estoque para uma loja online. Dada uma lista de produtos, utilize os métodos filter para encontrar produtos em estoque, map para formatar os dados exibindo apenas nome e preço, e reduce para calcular o preço total dos produtos.

// - Lista de produtos do Ecommerce

const produtos = [
  {
    nome: "Smart TV",
    valor: 200,
    emEstoque: true,
  },
  {
    nome: "Iphone 14",
    valor: 400,
    emEstoque: false,
  },
  {
    nome: "Playstation 5",
    valor: 600,
    emEstoque: true,
  },
  {
    nome: "Nintendo Switch",
    valor: 500,
    emEstoque: true,
  },
];

// 1° Aplicar um filter para encontrar produtos em estoque.

let produtosEmEstoque = produtos.filter((produto) => {
  return produto.emEstoque === true;
});

// 2° Usar o map para formatar os dados exibindo apenas nome e preço.

let produtosNoCarrinho = produtosEmEstoque.map((produto) => {
  return `${produto.nome} custa R$ ${produto.valor}`;
});

// 3° Usar o reduce para calcular o preço total dos produtos no carrinho.

let somaDosProdutos = produtosEmEstoque.reduce((somaProdutos, produto) => {
  return somaProdutos + produto.valor;
}, 0);

// - Saídas

console.log(`Quantidade de Produtos em Estoque: ${produtosEmEstoque.length}`);
console.log(produtosNoCarrinho);
console.log(`A Soma dos produtos no carrinho é de R$ ${somaDosProdutos}`);
