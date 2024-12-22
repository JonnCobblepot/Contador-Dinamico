// // Define o horário de início (23:55 do dia 23/12/2023)
// const startTime = new Date("2023-12-23T23:55:00");

// // Atualiza o contador dinamicamente
// function updateCounter() {
//     const now = new Date();
//     let elapsedTime = now - startTime;

//     // Calcula o tempo em anos, dias, horas, minutos e segundos
//     const seconds = Math.floor((elapsedTime / 1000) % 60);
//     const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
//     const hours = Math.floor((elapsedTime / 1000 / 60 / 60) % 24);

//     // Calcula dias totais e converte anos e dias restantes
//     const totalDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
//     const years = Math.floor(totalDays / 365);
//     const days = totalDays % 365;

//     // Verifica se "ano" deve estar no singular ou plural
//     const yearLabel = years === 1 ? "ano" : "anos";

//     // Formata o texto do contador
//     const formattedTime = `${years} ${yearLabel} ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;

//     // Atualiza o elemento na página
//     document.getElementById("timeDisplay").textContent = formattedTime;
// }

// // Atualiza o contador a cada segundo
// setInterval(updateCounter, 1000);

// // Chama a função para exibir imediatamente o tempo decorrido
// updateCounter();

// // Array de imagens
// const images = [
//     "imagens/FotoYT.png",
//     "imagens/Foto2.png",
//     "imagens/Foto3.png"
// ];
// let currentIndex = 0;

// // Troca para a imagem anterior
// function previousImage() {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     document.getElementById("image").src = images[currentIndex];
// }

// // Troca para a próxima imagem
// function nextImage() {
//     currentIndex = (currentIndex + 1) % images.length;
//     document.getElementById("image").src = images[currentIndex];
// }