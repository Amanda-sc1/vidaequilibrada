document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  if (!nome || !email || !telefone || !mensagem) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  alert(`Obrigado pelo contato, ${nome}! 💚
Recebemos sua mensagem e entraremos em contato pelo e-mail ${email}.`);
  
  this.reset();
});
