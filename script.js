document.getElementById('form-agendamento').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const mensagem = document.getElementById('mensagem');

  // Validação simples
  if (!nome || !data || !hora) {
    mensagem.textContent = 'Por favor, preencha todos os campos.';
    mensagem.style.color = 'red';
    return;
  }

  mensagem.textContent = `Agendamento realizado com sucesso para ${nome} em ${data} às ${hora}.`;
  mensagem.style.color = 'green';

  // Montar a mensagem para WhatsApp
  const textoWhats = encodeURIComponent(
    `Olá! Gostaria de confirmar meu agendamento:\nNome: ${nome}\nData: ${data}\nHora: ${hora}`
  );

  // Número do WhatsApp para onde enviar (coloque seu número aqui, com código do país e DDD, sem + ou espaços)
  const numeroWhats = '5511999999999';

  // URL do WhatsApp
  const urlWhats = `https://wa.me/${71992010947}?text=${textoWhats}`;

  // Abrir WhatsApp numa nova aba/janela
  window.open(urlWhats, '_blank');

  this.reset();

  // Limpa a mensagem após 5 segundos
  setTimeout(() => {
    mensagem.textContent = '';
  }, 5000);
  window.addEventListener('DOMContentLoaded', () => {
    const inputData = document.getElementById('data');
    const anoAtual = new Date().getFullYear();
  
    // Define limite mínimo e máximo para a data
    inputData.min = '1900-01-01';
    inputData.max = `${anoAtual}-12-31`;
  });
});