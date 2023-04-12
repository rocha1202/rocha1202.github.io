alert("Bem vindo á sala de cinema\nControlos:\nU - Inserir video local\nP - Iniciar/Pausar video")

const video = document.querySelector("#video-player");


document.addEventListener("keydown",play)
function play(event){
    if(event.key == "p"){
        if(video.paused == true){
            video.play()
        }else{
            video.pause()
        }
    }
}

document.addEventListener("keydown",external)
function external(event){
    if(event.key == "u"){
        let link = prompt("Insira o link do vídeo do youtube.")
        video.src = link
        delete link
    }
}

setTimeout(() => {
}, 10000);  