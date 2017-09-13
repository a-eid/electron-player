const music = document.querySelector(".musicaudio")
const voiceover =   document.querySelector(".voiceover")

function playmusic( src ){
  music.disabled = false 
  music.setAttribute("src" , src) 
  music.play()
}

function playVoiceover( src ){
  console.log("sdf")
  voiceover.disabled = false  
  voiceover.setAttribute( "src" , src) 
  voiceover.play()

  // listen on play set volume down 
  voiceover.addEventListener("play" , () => {
    music.volume = 0.5
  })
  // listen on ended set volume up 
  voiceover.addEventListener("ended" , () => {
    music.volume = 1
  })
}

$("form.music").on("submit" , e => {
  e.preventDefault() 
  const files = Array.from( document.querySelector("#file-music").files )
  let i = 0
  playmusic( files[i].path )

  $(".musicaudio").on("ended", () => {
    console.log("ended")
    if( ++i >= files.length ){
      i = 0 
    }
    playmusic(files[i].path )
  })

})

$("form.voice").on("submit" , e => {
  e.preventDefault() 
  const files = Array.from(document.querySelector("#file-voice").files) 
  const file = files && files[0] 
  if(!file) return 
  setInterval(() => 
    playVoiceover(file.path)
  , 60 * 1000 )
})


