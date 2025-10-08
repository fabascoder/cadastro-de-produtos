//  VALIDAÇÃO ADMIN

function validacaoAdmin() {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  // Controle das abas (tabs)
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabs.forEach((b) => b.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  // Validação do login de administrador
  const btnAdmin = document.querySelector(".btn-admin");
  btnAdmin.addEventListener("click", (e) => {
    const textAdmin = document.querySelector(".user-admin-input");
    const passAdmin = document.querySelector(".password");
    const resAdmin = document.querySelector(".res-login-admin");

    if (textAdmin.value === "admin" && passAdmin.value === "123") {
      const form = document.querySelector("#login-admin");
      form.setAttribute("action", "admin.html");
      form.submit(); // Envia o formulário para a página admin
      resAdmin.textContent = "";
      console.log("Login de admin realizado com sucesso!");
    } else {
      e.preventDefault();
      resAdmin.textContent = "ACESSO NEGADO";
      resAdmin.classList.add("msg-negado");
      console.log("Acesso negado para admin");
    }

    // Limpa mensagem de erro ao digitar novamente
    [textAdmin, passAdmin].forEach((input) => {
      input.addEventListener("input", () => {
        if (resAdmin.textContent !== "") {
          resAdmin.textContent = "";
          resAdmin.classList.remove("msg-negado");
        }
      });
    });
  });
}

// VALIDAÇÃO USER

function validacaoUser() {
  const btnUser = document.querySelector("#btn-user");

  btnUser.addEventListener("click", (e) => {
    e.preventDefault();

    const inputTxt = document.querySelector("#input-user");
    const inputSenha = document.querySelector("#pass-user");
    const resMsg = document.querySelector(".res-login-admin");

    if (inputTxt.value !== "" && inputSenha.value !== "") {
      const form = document.querySelector("#login-user");
      form.setAttribute("action", "usuario.html");
      form.submit(); // Redireciona para usuario.html
      resMsg.textContent = "";
      console.log("Login de usuário realizado com sucesso!");
    } else {
      resMsg.textContent = "DIGITE NOS CAMPOS ACIMA";
      resMsg.classList.add("msg-negado");
      console.log("Campos de login do usuário estão vazios!");
    }

    // Limpa mensagem de erro ao digitar novamente
    [inputTxt, inputSenha].forEach((input) => {
      input.addEventListener("input", () => {
        if (resMsg.textContent !== "") {
          resMsg.textContent = "";
          resMsg.classList.remove("msg-negado");
        }
      });
    });
  });
}

function validacaoCadastro() {
  const btn = document.querySelector("#btn-cadastro");

  btn.addEventListener("click", () => {
    const inputTxt = document.querySelector(".input-cad");
    const inputEmail = document.querySelector(".email-cad");
    const inputPass = document.querySelector(".pass-cad");
    const resMsg = document.querySelector(".res-login-cad");

    if (inputTxt.value !== "" && inputEmail.value !== "" && inputPass.value) {
      const form = document.querySelector("#cadastro-user");
      form.setAttribute("action", "index.html");
      form.submit(); 
      resMsg.textContent = "";
      console.log("Login de usuário realizado com sucesso!");
    } else {
      resMsg.textContent = "Digite valores válidos";
      resMsg.classList.add("msg-negado");
      console.log(resMsg);
    }
    [inputTxt, inputEmail, inputPass].forEach((input) => {
      input.addEventListener("input", () => {
        if (resMsg.textContent !== "") {
          resMsg.textContent = "";
          resMsg.classList.remove("msg-negado");
        }
      });
    });
  });
}

// EXECUÇÃO DAS FUNÇÕES
validacaoUser();
validacaoAdmin();
validacaoCadastro();
