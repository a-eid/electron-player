
const playhere = $(".playhere") 

function play( audio_src ){
  playhere.html(`
    <audio controls autoplay>
      <source src="${audio_src}"></source>
    </audio>
  `)
}


$("form.music").on("submit" , e => {
  // handling submitting music files 

  e.preventDefault() 
  const files = Array.from( document.querySelector("#file-music").files )
  console.log(files)
})

$("form.voice").on("submit" , e => {
  // handle submitting voice file 

  e.preventDefault() 
  const files = Array.from(document.querySelector("#file-voice").files ) 
  console.log(files)

})


