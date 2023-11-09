gsap.to('.container__title', {
    text: 'Рецепты итальянской кухни',
    delay: 0.2,
    duration: 1.8,
    ease: "power1.in", 
    
})

const input = document.querySelector("#input");
const cards = document.querySelectorAll(".card");
let i = 0;

input.addEventListener("keyup", (e) => {
    const word = e.target.value.toLowerCase();

    cards.forEach(card => {
        if(card.querySelector(".front__text").textContent.toLowerCase().includes(word)) {
            card.style.display = "block";
        } 
        
        else {
            card.querySelectorAll("li").forEach((item)=> {
                if(item.textContent.toLowerCase().includes(word) === true) {
                    i++;
                } 
            })

            if(i !== 0) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
            i = 0;
        }
    })
})

const moreBtn = document.querySelectorAll("#moreBtn");
const backBtn = document.querySelectorAll('#backBtn');

moreBtn.forEach((item) => {
    item.addEventListener("click", ()=> {
        let pp = item.parentNode;
        let parent = pp.parentElement;
        let sibling = parent.nextElementSibling;
        
        parent.style.transform = 'rotateY(180deg)';
        sibling.style.transform = 'rotateY(360deg)';
    })     
})

backBtn.forEach((item)=> {
    item.addEventListener("click", ()=> {
        let parent = item.parentNode;
        let prev = parent.previousElementSibling;
        parent.style.transform = 'rotateY(180deg)';
        prev.style.transform = 'rotateY(360deg)';
    })
})

AOS.init({
    duration: 1000,
    once: true,
});