const estoque = [];
function Dom(elemento) {
  this.element = document.querySelector(elemento);
}

function Cadastro(
  inputProduto,
  inputPreco,
  inputDesconto,
  inputQuantidade,
  inputDescricao,
  btnCadastrar,
  btnPrototipo,
  elementoProduto,
  elementoPrecoFinal,
  elementoPrecoOriginal,
  elementoQuantidade,
  elementoDescricao,
  tableProduto,
  tablePrecoOriginal,
  tableDesconto,
  tableQuantidade,
  tablePrecoTotal
) {
  this.inputProduto = inputProduto;
  this.inputPreco = inputPreco;
  this.inputDesconto = inputDesconto;
  this.inputQuantidade = inputQuantidade;
  this.inputDescricao = inputDescricao;
  this.btnCadastrar = btnCadastrar;
  this.btnPrototipo = btnPrototipo;
  this.elementoProduto = elementoProduto;
  this.elementoPrecoFinal = elementoPrecoFinal;
  this.elementoPrecoOriginal = elementoPrecoOriginal;
  this.elementoQuantidade = elementoQuantidade;
  this.elementoDescricao = elementoDescricao;
  this.tableProduto = tableProduto;
  this.tablePrecoOriginal = tablePrecoOriginal;
  this.tableDesconto = tableDesconto;
  this.tableQuantidade = tableQuantidade;
  this.tablePrecoTotal = tablePrecoTotal;

  //PEGA O TEXTO DOS ELEMENTOS DO PROTÓTIPO
  this.elementoPrecoFinal.innerHTML;
  this.elementoPrecoOriginal.innerHTML;
  this.elementoQuantidade.innerHTML;
  this.elementoDescricao.innerHTML;

  //PEGA O TEXTO DOS INPUT
  let valorProduto = this.inputProduto;
  let valorPreco = this.inputPreco;
  let valorDesconto = this.inputDesconto;
  let valorQuantidade = this.inputQuantidade;
  let valorDescricao = this.inputDescricao;

  this.btnCadastrar.addEventListener("click", (e) => {
    e.preventDefault();
    //VALIDAÇÃO SE O CAMPO ESTIVER VAZIO
    if (
      this.inputProduto.value === "" ||
      this.inputPreco.value === "" ||
      this.inputQuantidade.value === ""
    ) {
      erroCampoVazio();
    } else {
      setLocalStorage(); 
      validarTexto();
      valorProduto.value = "";
      valorPreco.value = "";
      valorQuantidade.value = "";
      valorDesconto.value = "";
      valorDescricao.value = "";
      const novoProduto = estoque[estoque.length - 1];

      // CRIAR UMA NOVA LINHA
      const novaLinha = document.createElement("tr");

      // ADICIONAR AS CÉLULAS (colunas)
      novaLinha.innerHTML = `
      <td>${novoProduto.produto}</td>
      <td>R$ ${novoProduto.preco}</td>
      <td>${novoProduto.desconto}%</td>
      <td>${novoProduto.quantidade}</td>
      <td>R$ ${novoProduto.precoFim}</td>
      <td><span class="deletar">DELETAR</span></td>
    `;
      // INSERIR NA TABELA
      const tabela = document.querySelector("tbody"); // ou use o seletor da sua tabela
      tabela.appendChild(novaLinha);
      const btnDeletar = novaLinha.querySelector(".deletar");
      btnDeletar.addEventListener("click", () => {
        novaLinha.remove();
      });
    }
  });



  function validarTexto() {
    const produto = valorProduto.value.trim();
    const quantidade = valorQuantidade.value.trim();
    const descricao = valorDescricao.value.trim();

    const desconto = valorDesconto.value.trim();
    const preco = valorPreco.value.trim();
    const des = (preco * desconto) / 100;
    const valorFinal = preco - des;
    if (valorDesconto.value === "") {
      desconto = 0;
    }


    estoque.push({
      produto: produto,
      desconto: desconto,
      descontoAplicado: des,
      preco: preco,
      precoFim: valorFinal,
      quantidade: quantidade,
      descricao: descricao,
    });

    setLocalStorage(produto, desconto, des, preco, valorFinal, quantidade, descricao);
    exibirMsg();

    const n = 0;
    function relatorio() {
      estoque.forEach((item, index) => {
        const produtosCadastrados = estoque.length;

        const totalProdutos = estoque.reduce((acc, item) => {
          return acc + item.precoFim;
        }, 0);
        const valorAlto = Math.max.bind(null, estoque[index].precoFim);
        const valorBaixo = Math.min.bind(null, estoque[index].precoFim);

        console.log(`Produtos Cadastrados: ${produtosCadastrados}`);
        console.log(`Total Bruto: ${totalProdutos}`);
        // console.log(`Produto mais alta: ${valorAlto()}`);
        // console.log(`Produto mais baixo: ${valorBaixo()}`);
      });
    }
    relatorio();
  }

  // LOCAL STORAGE SET
  function setLocalStorage(produto, desconto, descontoAplicado, preco, precoFim, quantidade, descricao) {
    localStorage.setItem('nomeProduto', produto);
    localStorage.setItem('descontoProduto', desconto)
    localStorage.setItem('descontoAplicadoProduto', descontoAplicado)
    localStorage.setItem('precoProduto', preco)
    localStorage.setItem('precoFimProduto', precoFim);  
    localStorage.setItem('quantidadeProduto', quantidade); 
    localStorage.setItem('descricaoProduto', descricao); 
  }
  // LOCAL STORAGE GET
  function exibirMsg() {
    const produtoAmazen = localStorage.getItem('nomeProduto');
    const descontoAmazen = localStorage.getItem('descontoProduto');
    const produtoAplicadoAmazen = localStorage.getItem('descontoAplicadoProduto');
    const precoAmazen = localStorage.getItem('precoProduto');
    const precoFimAmazen = localStorage.getItem('precoFimProduto');
    const quantidadeAmazen = localStorage.getItem('quantidadeProduto');
    const descricaoAmazen = localStorage.getItem('descricaoProduto');
    console.log(produtoAmazen, descontoAmazen, produtoAplicadoAmazen, precoAmazen, precoFimAmazen,quantidadeAmazen, descricaoAmazen)
  }

  //BOTAO PROTOTIPO
  this.btnPrototipo.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      this.inputProduto.value !== "" ||
      this.inputPreco.value !== "" ||
      this.inputQuantidade.value !== ""
    ) {
      const textRenderProduto = this.inputProduto.value;
      const textRnderPrecoFinal = this.inputPreco.value;
      const textRnderQuantidade = "qtd: " + this.inputQuantidade.value;
      const valorDesc = (textRnderPrecoFinal * inputDesconto.value) / 100;
      const precoFim = textRnderPrecoFinal - valorDesc;

      
    this.elementoProduto.innerHTML = textRenderProduto;
    this.elementoPrecoFinal.innerHTML = "R$ " + textRnderPrecoFinal;
    this.elementoQuantidade.innerHTML = textRnderQuantidade;
    this.elementoDescricao.innerHTML = descricaoAmazen;
    this.elementoPrecoOriginal.innerHTML = "R$ " + precoFim;
      
    }
  });

  function erroCampoVazio() {
    if (valorProduto.value == "") {
      valorProduto.style.border = "1px solid red";
    }
    if (valorPreco.value == "") {
      valorPreco.style.border = "1px solid red";
    }
    if (valorQuantidade.value == "") {
      valorQuantidade.style.border = "1px solid red";
    }
    console.log("Campo vazio ");
  }
}

const inputProduto = new Dom("#nome");
const inputPreco = new Dom("#preco");
const inputDesconto = new Dom("#desconto");
const inputQuantidade = new Dom("#quantidade");
const inputDescricao = new Dom("#descricao");
const btnCadastrar = new Dom("#btn-cadastrar");
const btnPrototipo = new Dom("#btn-prototipo");
const elementoProduto = new Dom("#preview-title");
const elementoPrecoFinal = new Dom(".preco-final");
const elementoPrecoOriginal = new Dom(".preco-original");
const elementoQuantidade = new Dom(".qtd");
const elementoDescricao = new Dom(".descricao-preview");
const btnDescontoAleatorio = new Dom("#btn-desconto-aleatorio");
const resResultadoBtnAleatorio = new Dom(".resultado-desconto-aleatorio");
const tableProduto = new Dom(".table-produto");
const tablePrecoOriginal = new Dom(".table-precoOriginal");
const tableDesconto = new Dom(".table-desconto");
const tableQuantidade = new Dom(".table-quantidade");
const tablePrecoTotal = new Dom(".table-precoTotal");

const cadastro = new Cadastro(
  inputProduto.element,
  inputPreco.element,
  inputDesconto.element,
  inputQuantidade.element,
  inputDescricao.element,
  btnCadastrar.element,
  btnPrototipo.element,
  elementoProduto.element,
  elementoPrecoFinal.element,
  elementoPrecoOriginal.element,
  elementoQuantidade.element,
  elementoDescricao.element,
  tableProduto.element,
  tablePrecoOriginal.element,
  tableDesconto.element,
  tableQuantidade.element,
  tablePrecoTotal.element
);
