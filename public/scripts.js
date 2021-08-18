const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for(let card of cards){
    card.addEventListener("click" , function(){
        const Id_Card = card.getAttribute("id");

        window.location.href = `/post/${Id_Card}`; 
    })
}
