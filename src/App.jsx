
import "../public/css/usuario.css";
import "../public/css/modal.css";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  let teste = document.querySelector('.login-icon'); 
  function handleTeste() {
    let modificao = "Modal Fake"; 
    teste.textContent = modificao; //Problema quando atualiza a pagina - para de funcionar só funciona de primeira
    console.log(teste)
    teste.style.color = 'red';
  }
  return (
    <>
      <header>
        <h1>Loja Online</h1>
        <a data-modal="login" title="Entrar ou Cadastrar">
          <i className="fas fa-user login-icon" onClick={handleTeste}>Modal</i>
          <a href="./pulblic/pages/admin.html"></a>
        </a>
      </header>

      <div className="search-container">
        <input type="text" placeholder="Buscar produtos..." />
      </div>

      <section className="products-section">
        <h2 style={{color: "#1a1aff", marginBottom: "20px"}}> 
          Produtos em Destaque
        </h2>
        <div className="products-grid">
          {/* <!-- Card 1 --> */}
          <div className="product-card">
            <img src="./public/image/tenis.avif" alt="Produto" />
            <div className="product-info">
              <h3>Produto 1</h3>
              <p className="price">R$ 120,00</p>
              <p>Descrição breve do produto.</p>
              <a href="./public/pages/produto.html" className="btn-details">
                Ver Detalhes
              </a>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="product-card">
            <img src="./public/image/tenis.avif" alt="Produto" />
            <div className="product-info">
              <h3>Produto 2</h3>
              <p className="price">R$ 89,90</p>
              <p>Produto com ótimo custo-benefício.</p>
              <a href="./public/pages/produto.html" className="btn-details">
                Ver Detalhes
              </a>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="product-card">
            <img src="./public/image/tenis.avif" alt="Produto" />
            <div className="product-info">
              <h3>Produto 3</h3>
              <p className="price">R$ 45,00</p>
              <p>Ideal para o dia a dia.</p>
              <a href="./public/pages/produto.html" className="btn-details">
                Ver Detalhes
              </a>
            </div>
          </div>
          {/* Adicione mais cards conforme necessário */}
        </div>
      </section>

      {/* MODAL */}
      <section data-modal="container" className="modal-container">
        <div data-modal="modal" className="modal">
          <form action="">
            <p>Login</p>
            <button data-modal="fechar" className="fechar">
              X
            </button>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" />
            <div className="div-button">
              <button type="submit">ENTRAR</button>
              <button className="btn-cadastrar">
                <a href="#">Cadastrar-se</a>
              </button>
            </div>
          </form>
        </div>
      </section>
      <script type="module" src="../public/js/main/script.js"></script>
    </>
  );
}

export default App;
