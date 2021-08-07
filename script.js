const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "WCCCWCCCCCWCCCCCWCWCW",
    "WCWCWCWWWCWWWWWCWCWCW",
    "WCWCWCCCWCCCCCWCWCCCW",
    "WCWWWWWWWCWCWWWCWCWCW",
    "WCCCCCCCCCWCCCCCWCWCW",
    "WCWWWCWWWWWCWWWWWCWCW",
    "WCWCCCWCCCWCWCCCCCWCW",
    "WCWWWWWCWCWCWCWWWCWCF",
    "SCCCCCWCWCWCWCWCWCWWW",
    "WWWWWCWCWCWCWCWCWCWCW",
    "WCCCCCWCWCWCCCWCWCWCW",
    "WCWWWWWWWCWWWWWCWCWCW",
    "WCCCCCCCWCCCCCCCWCCCW",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let dive = document.querySelector("#box")
let y = 0
let x = 0

function render(){
for(let i = 0; i < map.length; i++){
    for(let j = 0; j < map[i].length; j++){
        
        if(map[i][j] === "W"){
            div = document.createElement("div")
            div.classList.add("wall")
            div.setAttribute('id',`${i};${j}`)
        }
        if(map[i][j] === "C"){
            div = document.createElement("div")
            div.classList.add("caminho")
            div.setAttribute('id',`${i};${j}`)
        }
        if(map[i][j] === "S"){
            div = document.createElement("div")
            user = document.createElement("div")
            user.classList.add("user")
            div.classList.add("caminho")
            div.appendChild(user)
            div.setAttribute('id',`${i};${j}`)
           
            y = i
            x = j
        }
        if(map[i][j] === "F"){
            div = document.createElement("div")
            div.classList.add("final")
            div.setAttribute('id',`${i};${j}`)
        }
        
        dive.appendChild(div)
    }
}

}




let user = document.getElementById("user")

function move(){
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        let localUser = document.getElementsByClassName("user")[0]
        let parentPosition = localUser.parentElement

        let indexPai = parentPosition.id.split(";")
        let x = Number(indexPai[0])
        let y = Number(indexPai[1])
        //quando clicar pra cima vai ser x-1 
        //quando clicar pra baixo vai ser x+1
        //quando clicar pra direita vai ser y+1
        //quando clicar pra esquerda vai ser y-1
       
        
        if(keyName === "ArrowUp"){
          let cima = x - 1
          let currentBlock = document.getElementById(`${cima};${y}`)
            if(currentBlock.className === "caminho"){
                parentPosition.removeChild(user)
                currentBlock.appendChild(user)

            }
            
            
        }
        if(keyName === "ArrowDown"){
            let baixo = x + 1
            let currentBlock = document.getElementById(`${baixo};${y}`)
            if(currentBlock.className === "caminho"){
                parentPosition.removeChild(user)
                currentBlock.appendChild(user)

            }
            
        }
        if(keyName === "ArrowRight"){
            let direita = y + 1
            let currentBlock = document.getElementById(`${x};${direita}`)
            if(currentBlock.className === "caminho"){
                parentPosition.removeChild(user)
                currentBlock.appendChild(user)
            }
            if(currentBlock.className === "final"){
                parentPosition.removeChild(user)
                currentBlock.appendChild(user)
                div = document.createElement("div")
                document.body.appendChild(div)
                div.classList.add("congratulations")
                titulo = document.createElement("h1")
                titulo.innerText = "Parabéns!!!"
                div.appendChild(titulo)

            }
        }
        if(keyName === "ArrowLeft"){
            let esquerda = y - 1
            let currentBlock = document.getElementById(`${x};${esquerda}`)
            if(currentBlock.className === "caminho"){
                parentPosition.removeChild(user)
                currentBlock.appendChild(user)
            }
            
        }
    
      });
}

// let restart = document.getElementById("btn")

// restart.addEventListener('click', e =>{
    
//     console.log("reiniciar")
// })


render()
move()
// function criarWall(){
//     div = document.createElement('div')
//     dive.appendChild(div)
//     div.classList.add("wall")

// }
// function criarCaminho(){
//     div = document.createElement("div")
//     dive.appendChild(div)
//     div.classList.add("caminho")
// }
// function criarUser(){
//     div = document.createElement("div")
//     dive.appendChild(div)
//     div.classList.add("user")
// }
// function render(){
//     for(let i in map){
        
//         for(let j in map){
//             let index = `${i}${j}`
            
//             if(map[i][j] === "W"){
//                 criarWall()
//             }
//             else{
//                 criarCaminho()
//             }
            
//         }
//     }
// }









