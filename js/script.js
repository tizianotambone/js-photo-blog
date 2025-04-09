
const apiImg="https://lanciweb.github.io/demo/api/pictures/";
let container=document.querySelector(".container")
let overlay=document.querySelector(".overlay")
let imgs;

// effetuo la chiamata ajax al link che mi restituisce un array di oggetti all'interno della chiave 'data'
axios.get(apiImg).then(res => {
    imgs = res.data;
    console.log(res.data);

    // utilizzo il ciclo foreach e innerhtml per inseire le card nell'html
    imgs.forEach((e) => {
        container.innerHTML += `<div class="card">
            <img src="./img/pin.svg" alt="" class="point">
            <img src="${e.url}" alt="" class="forest">
            <p class="size">${e.date}</p>
            <h4 class="size2">${e.title}</h4>
        </div>`;
    });

    // prendo tutti gli elementi con la classe card 
    let cards = document.querySelectorAll(".card");
    // seleziono l'immagine da modificare di volta in volta
    let immagine=document.querySelector(".immagine")

    // ciclo cards per creare un evento ad ogni elemento dell'array
    for (let i = 0; i < cards.length; i++) {
        // per ogni elemento creo l'evento
        cards[i].addEventListener("click", function () {
            // mostro a schermo l'overlay trasfromando il display in block
            overlay.style.display = "block";
            // cambio l'attributo 'src' del tag img con quello dell'elemento cliccato
            immagine.setAttribute("src",imgs[i].url)
        });
    }
});

// seleziono il bottone per chiudere l'overlay
let btn= document.querySelector(".btn")

// creo l'evento al click del bottone 
btn.addEventListener(`click`,function(){
    overlay.style.display="none"
})

