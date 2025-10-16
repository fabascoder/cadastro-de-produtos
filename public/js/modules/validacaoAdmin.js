export default function validacaoAdmin() {
  // const tabs = document.querySelectorAll(".tab-btn");
  // const contents = document.querySelectorAll(".tab-content");

  // // Controle das abas (tabs)
  // tabs.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     tabs.forEach((b) => b.classList.remove("active"));
  //     contents.forEach((c) => c.classList.remove("active"));

  //     btn.classList.add("active");
  //     document.getElementById(btn.dataset.tab).classList.add("active");
  //   });
  // });

  // // Validação do login de administrador
  // const btnAdmin = document.querySelector(".btn-admin");
  // btnAdmin.addEventListener("click", (e) => {
  //   const textAdmin = document.querySelector(".user-admin-input");
  //   const passAdmin = document.querySelector(".password");
  //   const resAdmin = document.querySelector(".res-login-admin");

  //   if (textAdmin.value === "admin" && passAdmin.value === "123") {
  //     const form = document.querySelector("#login-admin");
  //     form.setAttribute("action", "admin.html");
  //     form.submit(); // Envia o formulário para a página admin
  //     resAdmin.textContent = "";
  //     console.log("Login de admin realizado com sucesso!");
  //   } else {
  //     e.preventDefault();
  //     resAdmin.textContent = "ACESSO NEGADO";
  //     resAdmin.classList.add("msg-negado");
  //     console.log("Acesso negado para admin");
  //   }

  //   // Limpa mensagem de erro ao digitar novamente
  //   [textAdmin, passAdmin].forEach((input) => {
  //     input.addEventListener("input", () => {
  //       if (resAdmin.textContent !== "") {
  //         resAdmin.textContent = "";
  //         resAdmin.classList.remove("msg-negado");
  //       }
  //     });
  //   });
  // });
}