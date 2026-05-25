import { useEffect, useRef } from "react";

function MusicPlayer(){

const audioRef=useRef(null);

useEffect(()=>{

const timer=setTimeout(()=>{

if(audioRef.current){

audioRef.current.volume=.05;

audioRef.current.play()
.catch(()=>{});

}

},2000);

return()=>clearTimeout(timer);

},[]);


return(

<audio
ref={audioRef}
loop
src="/music/theme.mp3"
/>

)

}

export default MusicPlayer