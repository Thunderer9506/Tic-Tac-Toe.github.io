const pick = document.getElementsByTagName("i")
const playButtons = document.querySelectorAll(".playing_button")
let x = pick[0]
let o = pick[1]

let turn = "x"
let player = ""
let opponent = ""

// function engine(){
//     if (playButtons[0]){

//     }
// }

for(let i = 0;i<pick.length;i++){
    pick[i].addEventListener("click",function(event){
        if (this == x){
        if (!("active" in x)){
            x.classList.add("active")
            o.classList.remove("active")
            player = "x"
            opponent = "o"
        } 
        }
        if (this == o){
            if (!("active" in o)){
                o.classList.add("active")
                x.classList.remove("active")
                player = "o"
                opponent = "x"
            }
        }
    })
}



for(let i = 0;i<playButtons.length;i++){
    playButtons[i].addEventListener("click",function(event){
        if(turn == "x"){
            document.querySelector(".turn i").setAttribute("class","fa-regular fa-circle fa-lg")
            document.querySelectorAll(".playing_button img")[i].src = "SVG/icon-x.svg"
            turn = "o"
        }
        else if(turn == "o"){
            document.querySelector(".turn i").setAttribute("class","fa-solid fa-xmark fa-lg")
            document.querySelectorAll(".playing_button img")[i].src = "SVG/icon-o.svg"
            turn = "x"
        }
        document.querySelectorAll(".playing_button img")[i].style.display = "block";
    })
}



function start(){
    console.log("player: "+player+" opponent:"+opponent)
    document.querySelector(".starting_menu").style.display = "none"
    document.querySelector(".playing").style.display = "block"
}

function restart(){
    document.querySelector(".starting_menu").style.display = "flex"
    document.querySelector(".playing").style.display = "none"
}


