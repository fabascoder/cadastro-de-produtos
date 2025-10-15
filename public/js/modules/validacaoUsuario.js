export default function validacaoUser() {
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