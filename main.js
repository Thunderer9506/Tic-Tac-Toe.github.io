const pick = document.getElementsByTagName("i")
let x = pick[0]
let o = pick[1]
for(let i = 0;i<pick.length;i++){
    pick[i].addEventListener("click",function(event){
        if (this == x){
        if (!("active" in x)){
            x.classList.add("active")
            o.classList.remove("active")
        } 
        }
        if (this == o){
            if (!("active" in o)){
                o.classList.add("active")
                x.classList.remove("active")
            }
        }
    })
}


