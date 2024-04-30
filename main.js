const pick = document.getElementsByTagName("i")
const playButtons = document.querySelectorAll(".playing_button")
const playerbuttons = document.querySelectorAll(".playing_button img")

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

function quit(){
    xscore = 0
    oscore = 0
    tiescore = 0
    updateScore()
    player = ""
    opponent = ""
    xList = []
    oList = []
    document.querySelector(".win_lost_background").style.display="none"
    document.querySelector(".win_lose").style.display="none"
    document.querySelector(".starting_menu").style.display = "flex"
    document.querySelector(".playing").style.display = "none"
    turn = "x"
    for(let i = 0;i<playButtons.length;i++){
        playButtons[i].disabled = false
        playerbuttons[i].style.display = "none";
        document.querySelectorAll(".playing_button")[i].style.boxShadow = "0px 8px #111c22";
    }
    
}

function nextRound(){
    xList = []
    oList = []
    document.querySelector(".win_lost_background").style.display="none"
    document.querySelector(".win_lose").style.display="none"
    turn = "x"
    for(let i = 0;i<playButtons.length;i++){
        playButtons[i].disabled = false
        playerbuttons[i].style.display = "none";
        document.querySelectorAll(".playing_button")[i].style.boxShadow = "0px 8px #111c22";
    }
}

function whowin(who){
    document.querySelector(".win_lost_background").style.display="block"
    document.querySelector(".win_lose").style.display="block"
    if (who == "x"){
        document.querySelector(".win_lose p").innerText="PLAYER X WINS"
        document.querySelector(".whowin img").src = "SVG/icon-x.svg"
        document.querySelector(".whowin img").style.color = "#31c3bd"
    }
    else if(who == "o"){
        document.querySelector(".win_lose p").innerText="PLAYER O WINS"
        document.querySelector(".whowin img").src = "SVG/icon-o.svg"
        document.querySelector(".whowin img").style.color = "#f2b137"
    }
    else if(who == "tie"){
        document.querySelector(".win_lose p").style.display="none"
        document.querySelector(".whowin img").style.display="none"
        document.querySelector(".whowin p").innerText="ROUND TIED"
        document.querySelector(".whowin img").style.color = "#a8bfc9"
    }
}


function engine(){
    for(let i = 0;i<winSituation.length;i++){
        if(xList.includes(winSituation[i][0]) & xList.includes(winSituation[i][1]) & xList.includes(winSituation[i][2])){
            xscore += 1
            whowin("x")
        }
        else if(oList.includes(winSituation[i][0]) & oList.includes(winSituation[i][1]) & oList.includes(winSituation[i][2])){
            oscore += 1
            whowin("o")
        }
        else if(xList.length + oList.length == 9){
            tiescore += 1
            whowin("tie")
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
                document.querySelector(".x_box .scoreTitle").innerText = "X(YOU)"
                document.querySelector(".o_box .scoreTitle").innerText = "O(OTHER)"
                player = "x"
                opponent = "o"
            } 
        }
        if (this == o){
            if (!("active" in o)){
                o.classList.add("active")
                x.classList.remove("active")
                document.querySelector(".x_box .scoreTitle").innerText = "O(YOU)"
                document.querySelector(".o_box .scoreTitle").innerText = "X(OTHER)"
                player = "o"
                opponent = "x"
            }
        }
    })
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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
        this.disabled = true
        playerbuttons[i].style.display = "block";
        document.querySelectorAll(".playing_button")[i].style.boxShadow = "0px 5px #111c22";
        engine()
    })
}

function startplaying(){
    document.querySelector(".starting_menu").style.display = "none"
    document.querySelector(".playing").style.display = "flex"
}

function restart(){
    xscore = 0
    oscore = 0
    tiescore = 0
    updateScore()
    xList = []
    oList = []
    document.querySelector(".win_lost_background").style.display="none"
    document.querySelector(".win_lose").style.display="none"
    turn = "x"
    for(let i = 0;i<playButtons.length;i++){
        playButtons[i].disabled = false
        playerbuttons[i].style.display = "none";
        document.querySelectorAll(".playing_button")[i].style.boxShadow = "0px 8px #111c22";
    }
}