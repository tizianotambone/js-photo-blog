
const apiImg="https://lanciweb.github.io/demo/api/pictures/";
let container=document.querySelector(".container")

 axios.get(apiImg).then(res =>{
    const imgs = res.data;
    console.log(res.data)

    imgs.forEach((e)=>{
        container.innerHTML=`<div class="card">
                    <img src="./img/pin.svg" alt="" class="point">
                    <img src="${e.url}" alt="" class="forest">
                    <p class="size">${e.date}</p>
                    <h4 class="size2">${e.title}</h4>
                </div>`
       
    
    })
})
let overlay = document.querySelector(".overlay")
let card=document.querySelectorAll(".card")
card.forEach((e)=>{
    e.addEventListener(`click`,function(e){
        overlay.style.display="block"
    })

})

let btn= document.querySelector(".btn")
 btn.addEventListener(`click`,function(){
     overlay.style.display="none"
})

