// Contagem Regressiva
const countdown = document.getElementById('countdown');
const weddingDate = new Date("January 24, 2026 10:00:00").getTime();
const ceremonyStart = new Date("January 24, 2026 10:10:00").getTime(); 
const ceremonyEnd = new Date("January 24, 2026 11:00:00").getTime();    
const receptionStart = new Date("January 24, 2026 13:00:00").getTime();  
const married = new Date("January 24, 2026 17:00:00").getTime();         

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    // Calculando o tempo decorrido após a cerimônia
    if (now >= ceremonyStart && now < ceremonyEnd) {
      countdown.innerHTML = "Cerimônia começando!";
    } else if (now >= ceremonyEnd && now < receptionStart) {
      countdown.innerHTML = "Em cerimônia!";
    } else if (now >= receptionStart && now < married) {
      countdown.innerHTML = "Recepção em andamento!";
    } else if (now >= married) {
      countdown.innerHTML = "Enfim casados!";
    }
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}dias - ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(updateCountdown, 1000);  // Atualiza o contador a cada segundo

setInterval(updateCountdown, 1000);
updateCountdown();

//ovos de pascoa

document.addEventListener("DOMContentLoaded", function () {
    const btnGift = document.getElementById("btn-home");
    let clickCount = 0;
  
    if (window.location.pathname.includes("home.html")) {
      btnGift.addEventListener("click", function (event) {
        clickCount++;  // Incrementa o contador de cliques

        if (clickCount == 5) {
          btnGift.classList.add("easter-egg");
          alert("Pare por favor!🤚");
        }
        if (clickCount == 15) {
            btnGift.classList.add("easter-egg"); 
            alert("Eu pedir para parar!😪");
        }
        if (clickCount == 30) {
            btnGift.classList.add("easter-egg");  
            alert("Mas tu é debochado mesmo, hein?😒");
        }
        if (clickCount == 50) {
            btnGift.classList.add("easter-egg");
            alert("Está bem! Você venceu! Pega aqui o prêmio de chato do ano!🎁");
         }
        if (clickCount == 100) {
            btnGift.classList.add("easter-egg2");  
            alert("CHEGA!😡😠😡😠");
         }       
      });
    }
  });


const form = document.getElementById('confirmacao-form');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio normal
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      form.style.display = 'none';
      mensagemSucesso.style.display = 'block';
      mensagemSucesso.classList.add('mensagem-animada');

      // 🎉 Ativa confete
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      alert('Erro no envio, tente novamente!1');
    }
  }).catch(error => {
    alert('Erro no envio, tente novamente!2');
  });
});