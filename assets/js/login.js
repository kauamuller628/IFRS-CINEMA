const formLogin = document.getElementById("formLogin");
const campoUsuario = document.getElementById("usuario");
const campoSenha = document.getElementById("senha");
const mensagemErro = document.getElementById("mensagemErro");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  const usuario = campoUsuario.value.trim();
  const senha = campoSenha.value.trim();

  if (usuario === "Cinema" && senha === "123") {
    window.location.href = "movies.html";
    return;
  }

  mensagemErro.textContent = "Usuário ou senha inválidos";
});
