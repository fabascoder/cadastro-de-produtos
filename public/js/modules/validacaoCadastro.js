export default function validacaoCadastro() {
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