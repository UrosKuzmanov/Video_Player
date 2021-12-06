 const video= document.getElementById("video")
 const play= document.getElementById("play")
 const stop= document.getElementById("stop")
 const progress= document.getElementById("progress")
 const timestap= document.getElementById("timestamp")

//play &pause video
function toggleVideoStatus(){
  if(video.paused){
    video.play()
  }else{
    video.pause()
  }
}
//Update play icon
function updatePlayIcon(){
  if(video.paused){
    play.innerHTML='<i class="fa fa-play fa-2x"></i>'
  }else{
    play.innerHTML='<i class="fa fa-pause fa-2x"></i>'

  }
}

//Update progress
function updateProgrss(){
  progress.value=(video.currentTime/video.duration)*100

  //Get minutes
  let mins=Math.floor(+video.currentTime/60)
  if(mins<10){
    mins="0"+String(mins)
    
  }
  //Get sec
  let sec=Math.floor(+video.currentTime%60)
  if(sec<10){
    sec="0"+String(sec)

  }

  timestap.innerHTML=`${mins}:${sec}`


}
//set video time
function setVideoProgress(){
  video.currentTime=(+progress.value*video.duration)/100
}


function stopVideo(){
  video.currentTime=0
  video.pause()
}

 //Event listeners
 video.addEventListener('click',toggleVideoStatus)
 video.addEventListener('pause',updatePlayIcon)
 video.addEventListener('play',updatePlayIcon)
 video.addEventListener('timeupdate',updateProgrss)

 play.addEventListener('click', toggleVideoStatus)
 stop.addEventListener('click', stopVideo)

 progress.addEventListener('change',setVideoProgress)