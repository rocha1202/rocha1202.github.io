const video = document.querySelector("#video-player");

window.onload = function(){
  video.play()
}

AFRAME.registerComponent("controlevideo", {
    init: function () {
      this.el.addEventListener("mouseenter", function (evt) {
        $("#video-player").trigger('play')
      })
      this.el.addEventListener("mouseleave", function (evt) {
        $("#video-player").trigger('pause')
      })
    }
})


//Spider-man
AFRAME.registerComponent("poster1", {
    init: function () {
    this.el.addEventListener("mouseenter", function (evt) {
        video.src = "/Video/spider-man.mp4"
    })
}
})



//Titanic
AFRAME.registerComponent("poster2", {
    init: function () {
    this.el.addEventListener("mouseenter", function (evt) {
        video.src = "/Video/titanic.mp4"
    })
}
})