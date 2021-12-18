const music = document.getElementById("music");
const upbtn = document.createElement("button");
const about = document.getElementById("About");
document.body.appendChild(upbtn);
upbtn.classList.add("upbtn");
upbtn.innerHTML=`<a href="#"><img src="media/arrow_forward_ios_white_18dp.svg" height="35" width="35" alt="Up"></a>`;
upbtn.onclick=function(){
    scrollTo(top);
}
window.onclick = function(){
    music.play();
}

function show(id){
    let image = document.getElementById(id);
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("img00");
    modal.style.display = "block";
    modalImg.src = image.src;
}

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
  }