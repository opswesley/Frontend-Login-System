document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("formContent").classList.add("fadeIn");
  });
  
  const form = document.getElementById("form");
  const loginInput = document.getElementById("login");
  const senhaInput = document.getElementById("senha");
  const mensagemBemVindo = document.getElementById("mensagem-bem-vindo");
  const mensagemDia = document.getElementById("mensagem-dia");

  const db = {
	usuarios: [
	  {
		id: 1,
		login: "admin",
		senha: "admin"
	  }
	]
  };

  function getHoraAtual() {
	const hora = new Date().getHours();
	if (hora < 12) {
	  return "Bom dia!";
	} else if (hora < 18) {
	  return "Boa tarde!";
	} else {
	  return "Boa noite!";
	}
  }

  function getDiaSemana() {
	const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
	const dia = new Date().getDay();
	return `Hoje é ${diasSemana[dia]}`;
  }

  function criarAnimacaoDiaSemana() {
	const mensagem = document.createElement("p");
	mensagem.textContent = getDiaSemana();
	mensagem.style.fontSize = "24px";
	mensagem.style.fontWeight = "bold";
	mensagem.style.color = "#0d0d0d";
	mensagem.style.marginBottom = "10px";
	mensagem.style.animation = "fadeIn 2s";
	mensagem.style.animationFillMode = "forwards";
	mensagemDia.textContent = "";
	mensagemDia.appendChild(mensagem);
  }

  mensagemBemVindo.textContent = getHoraAtual();
  mensagemBemVindo.style.fontSize = "24px";
  mensagemBemVindo.style.fontWeight = "bold";
  mensagemBemVindo.style.color = "#0d0d0d";
  mensagemBemVindo.style.marginBottom = "10px";
  mensagemBemVindo.style.textShadow = "0 0 5px rgba(0, 0, 0, 0.2)";
  criarAnimacaoDiaSemana();
  
  form.addEventListener("submit", (e) => {
	e.preventDefault();
  
	const login = loginInput.value.trim();
	const senha = senhaInput.value.trim();
  
	const usuario = db.usuarios.find((usuario) => usuario.login === login && usuario.senha === senha);
  
	if (usuario) {
	  window.location.href = "admin.html";
	} else {
	  mensagemDia.style.fontFamily = "Lato";
	  mensagemDia.style.fontSize = "20px";
	  mensagemDia.style.color = "#333";
	  mensagemDia.style.marginBottom = "20px";
	  mensagemDia.style.fontStyle = "normal";
	  alert("Login ou senha incorretos");
	}
  });