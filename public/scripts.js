const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for(let card of cards){
    card.addEventListener("click" , function(){
        modalOverlay.classList.add("actived");
        const Id_Card = card.getAttribute("id");
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${Id_Card}`;
    })
}


document.querySelector(".close-model").addEventListener("click", function(){
    modalOverlay.classList.remove("actived");
    modalOverlay.querySelector("iframe").src = ``;
    document.querySelector(".modal").classList.remove("fullscreen-actived");

});

document.querySelector(".fullscreen").addEventListener("click" , function(){

    if( !(document.querySelector(".modal").classList.contains("fullscreen-actived")) ){
        document.querySelector(".modal").classList.add("fullscreen-actived");
    } else{
        document.querySelector(".modal").classList.remove("fullscreen-actived");
    }
})