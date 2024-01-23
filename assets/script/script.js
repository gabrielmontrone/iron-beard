// Função para ajustar a posição de rolagem ao clicar nos links da navbar
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Ajuste para compensar o tamanho da navbar
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});

// Função para troca do Background na seção "Home"
document.addEventListener("DOMContentLoaded", function() {
    var images = ["/iron-beard/assets/imgs/cortando_cabelo.jpg", "/iron-beard/assets/imgs/espuma.jpg", "/iron-beard/assets/imgs/lavatorio.jpg"];
    var currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        document.querySelector(".home-section").style.backgroundImage = "url(" + images[currentIndex] + ")";
    }

    setInterval(changeBackground, 5000);
});

// Função para seção de Contato, estilizando os placeholders
document.addEventListener("DOMContentLoaded", function() {
    var mensagemTextarea = document.getElementById("mensagem");
    var nomeTextarea = document.getElementById("nome");
    var numeroTextarea = document.getElementById("celular");
    var emailTextarea = document.getElementById("email");
    var assuntoTextarea = document.getElementById("assunto");

    mensagemTextarea.addEventListener("blur", function() {
        mensagemTextarea.classList.add("completed");
    });

    nomeTextarea.addEventListener("blur", function() {
        nomeTextarea.classList.add("completed");
    });

    numeroTextarea.addEventListener("blur", function() {
        numeroTextarea.classList.add("completed");
    });

    emailTextarea.addEventListener("blur", function() {
        emailTextarea.classList.add("completed");
    });

    assuntoTextarea.addEventListener("blur", function() {
        assuntoTextarea.classList.add("completed");
    });
});
    
// Função de entrada para o número de celular
function formatarCelular(input) {
    // Remove todos os caracteres não numéricos
    let numeroLimpo = input.value.replace(/[^0-9]/g, '');

    // Adiciona parênteses para os dois primeiros dígitos (DDD)
    if (numeroLimpo.length >= 2) {
        numeroLimpo = '(' + numeroLimpo.substring(0, 2) + ')' + numeroLimpo.substring(2);
    }

    // Atualiza o valor do campo
    input.value = numeroLimpo;
}

// Menu para celular
function clickMenu() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
    } else {
        menuMobile.classList.add("open");
    }
}



