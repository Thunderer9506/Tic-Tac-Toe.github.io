const pick = document.getElementsByTagName("i")
const playButtons = document.querySelectorAll(".playing_button")
let x = pick[0]
let o = pick[1]

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



for (let i =0;i<playButtons.length;i++){
    playButtons[i].addEventListener("click",function(event){
        
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


