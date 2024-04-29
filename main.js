const pick = document.getElementsByTagName("i")
let playButtons = document.querySelectorAll(".playing_button")
let playerbuttons = document.querySelectorAll(".playing_button img")

let xscore = 0
let oscore = 0
let tiescore = 0

let x = pick[0]
let o = pick[1]

let xList = []
let oList = []

const winSituation = [
    ["one","two","three"],
    ["four","five","six"],
    ["seven","eight","nine"],
    ["one","four","seven"],
    ["two","five","eight"],
    ["three","six","nine"],
    ["one","five","nine"],
    ["three","five","seven"],
]

let turn = "x"
let player = ""
let opponent = ""

function updateScore(){
    document.querySelector(".x_box .score").innerText = xscore
    document.querySelector(".o_box .score").innerText = oscore
    document.querySelector(".ties .score").innerText = tiescore
}


function engine(){
    for(let i = 0;i<winSituation.length;i++){
        if(xList.includes(winSituation[i][0]) & xList.includes(winSituation[i][1]) & xList.includes(winSituation[i][2])){
            xscore += 1
        }
        else if(oList.includes(winSituation[i][0]) & oList.includes(winSituation[i][1]) & oList.includes(winSituation[i][2])){
            oscore += 1
        }
        else if(xList.length + oList.length == 9){
            tiescore += 1
            break
        }
    }
    updateScore()
}

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
for(let i = 0;i<playerbuttons.length;i++){
    playerbuttons[i].addEventListener("mouseover",function(event){
        if(turn == "x"){
            playerbuttons[i].src = "SVG/icon-x-outline.svg"
        }
        else if(turn == "o"){
            playerbuttons[i].src = "SVG/icon-o-outline.svg"
        }
    })
}


for(let i = 0;i<playButtons.length;i++){
    playButtons[i].addEventListener("click",function(event){
        if(turn == "x"){
            document.querySelector(".turn i").setAttribute("class","fa-regular fa-circle fa-lg")
            playerbuttons[i].src = "SVG/icon-x.svg"
            turn = "o"
            xList.push(this.classList[1])
        }
        else if(turn == "o"){
            document.querySelector(".turn i").setAttribute("class","fa-solid fa-xmark fa-lg")
            playerbuttons[i].src = "SVG/icon-o.svg"
            turn = "x"
            oList.push(this.classList[1])
        }
        delete playButtons[this]
        delete playerbuttons[playerbuttons[i]]
        // playerbuttons[i].disabled = true
        playerbuttons[i].style.display = "block";
        document.querySelectorAll(".playing_button")[i].style.boxShadow = "0px 5px #111c22";
        engine()
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


