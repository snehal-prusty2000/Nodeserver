// HTML Audio Interface Use for Sound
function play(){
    const audioElement = new Audio("WhatsApp Audio 2023-10-18 at 08.10.21.mpeg");
    audioElement.play();
    audioElement.autoplay = "true";
}

 setInterval(()=>{
    let d = new Date()
    time.innerHTML = d.toDateString() + " " + d.toTimeString()

 },1000)

 const setAlaram = (seconds)=>{
  let d = new Date().getTime()
    setTimeout(()=>{
        play()
    }, seconds*1000)

    setInterval(()=>{
        secondsLeft = -(new Date().getTime()-(d + seconds * 1000))

        if(secondsLeft > 0 ){
        alarm.innerHTML = " Alarm ringing in " +Math.floor( secondsLeft/1000 )+ "seconds";
        }
    })
 }

// setAlaram(500);

 let s = prompt("After how many seconds do you want an alaram ?")
 //setAlaram(Integer.parseInt(s)); here integer not need to write bcz of javascript  Integer is not defined
 setAlaram(parseInt(s));