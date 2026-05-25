import { useRef } from "react";

function SfxPlayer(){

const clickRef=useRef();
const heartRef=useRef();

function playClick(){

clickRef.current.currentTime=0;
clickRef.current.play();

}

function playHeart(){

heartRef.current.currentTime=0;
heartRef.current.play();

}

return{

playClick,
playHeart,

component:(

<>

<audio
ref={clickRef}
src="/sfx/click-soft.mp3"
/>

<audio
ref={heartRef}
src="/sfx/heart.mp3"
/>

</>

)

}

function playClick(){

clickRef.current.currentTime=0;

clickRef.current.volume=.35;

clickRef.current.play();

}


function playHeart(){

heartRef.current.currentTime=0;

heartRef.current.volume=.25;

heartRef.current.play();

}

}

export default SfxPlayer;