btnMailto.onclick = function(){
document.getElementById("btnMailto").innerHTML="A très bientôt";
}

let modal = document.getElementById("leadModal");
console.log(modal,'console log de modal');

let btn = document.getElementById("btnNo");
console.log(btn,'console log de btn');

function modalHomePage(){
    
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
    modal.style.display = "block";
    window.onscroll = null;
    }   
}

window.onscroll = function (){
    modalHomePage()
};

btn.onclick= function(){
    modal.style.display = "none";
}

