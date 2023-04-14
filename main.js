alert("Bem vindo á sala de cinema\n\nControlos:\nU - Inserir video local\nP - Iniciar/Pausar video")

const video = document.querySelector("#video-player");

let fov = 100;
fov = parseInt(fov)


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
        let link = prompt("Insira o nome do ficheiro a abrir\n(O ficheiro tem de estar na pasta 'Video' e ser .mp4")
        link = "/Video/"+link+".mp4"
        video.src = link
        delete link
    }
}

setTimeout(() => {
}, 10000);  