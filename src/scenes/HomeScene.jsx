import { useState } from "react";
import { motion } from "framer-motion";

import AnimatedBackground from "../components/Background/AnimatedBackground";

import AvatarBoy from "../components/Avatar/AvatarBoy";
import AvatarGirl from "../components/Avatar/AvatarGirl";

import DialogueLetter from "../components/Dialogue/DialogueLetter";

import FloatingHearts from "../components/Effects/FloatingHearts";
import Petals from "../components/Effects/Petals";
import ClickReaction from "../components/Effects/ClickReaction";

import TopBar from "../components/Navigation/TopBar";

import MemoryStar from "../components/Memories/MemoryStar";
import MemoryModal from "../components/Memories/MemoryModal";

import { memories } from "../data/memories";
import { conversations } from "../data/dialogues";

import MusicPlayer from "../components/Audio/MusicPlayer";
import SfxPlayer from "../components/Audio/SfxPlayer";

import Timeline from "../components/Timeline/Timeline";
import FinalLetter from "../components/FinalLetter/FinalLetter";
import EndingScene from "../components/Ending/EndingScene";
import LoveCounter from "../components/LoveCounter/LoveCounter";

import AmbientParticles from "../components/Effects/AmbientParticles";

import "../components/Avatar/avatar.css";


function HomeScene(){

const [dialogue,setDialogue]=useState({

speaker:"Lui",
text:"Je crois que cette histoire commence ici... ❤️"

});

const [showReaction,setShowReaction]=useState(false);

const [selectedMemory,
setSelectedMemory]=useState(null);

const [boyMood,setBoyMood]=useState("neutral");

const [girlMood,setGirlMood]=useState("neutral");

const [expectedSpeaker,
setExpectedSpeaker]=useState("Lui");

const [currentConversation,
setCurrentConversation]=useState(null);

const [

showFinalLetter,

setShowFinalLetter

]=useState(false);

const sfx=SfxPlayer();

const [

showEnding,

setShowEnding

]=useState(false);

function triggerReaction(){

setShowReaction(true);

setTimeout(()=>{

setShowReaction(false);

},2200);

}


function resetMoods(){

setTimeout(()=>{

setBoyMood("neutral");
setGirlMood("neutral");

},3000);

}

function getMood(text){

const lower=text.toLowerCase();

if(

lower.includes("❤️")
||

lower.includes("amour")
||

lower.includes("aime")

){

return "love";

}


if(

lower.includes("😳")
||

lower.includes("timide")

){

return "shy";

}


if(

lower.includes("😭")
||

lower.includes("rire")
||

lower.includes("mdr")

){

return "happy";

}


if(

lower.includes("😠")

){

return "angry";

}


return "neutral";

}


function boyClick(){

if(expectedSpeaker!=="Lui"){

setDialogue({

speaker:"Lui",
text:"C'est à ma chérie de parler ❤️"

});

return;

}

const random=

conversations.boy[
Math.floor(
Math.random()*
conversations.boy.length
)
];

setCurrentConversation(random);

setDialogue({

speaker:"Lui",
text:random.text

});

setBoyMood(

getMood(random.text)

);

setGirlMood("neutral");

setExpectedSpeaker("Elle");

sfx.playClick();
sfx.playHeart();

triggerReaction();

resetMoods();

}

function girlClick(){

if(expectedSpeaker!=="Elle"){

setDialogue({

speaker:"Elle",
text:"Non non 😏 c'est à lui de parler"

});

return;

}

const random=

conversations.girl[
Math.floor(
Math.random()*
conversations.girl.length
)
];

setCurrentConversation(random);

setDialogue({

speaker:"Elle",
text:random.text

});

setGirlMood(

getMood(random.text)

);

setBoyMood("neutral");

setExpectedSpeaker("Lui");

sfx.playClick();
sfx.playHeart();

triggerReaction();

resetMoods();

}



return(

<>
<motion.div

className="speakerAura"

animate={{

background:

dialogue.speaker==="Lui"

?

"radial-gradient(circle, rgba(255,255,255,.10), transparent 65%)"

:

"radial-gradient(circle, rgba(255,120,180,.15), transparent 65%)"

}}

transition={{

duration:1

}}

/>

<AnimatedBackground/>

<MusicPlayer/>

{sfx.component}

<TopBar/>

<AmbientParticles/>

<LoveCounter/>

<FloatingHearts/>

<Petals/>

<ClickReaction
show={showReaction}
/>


{/* Souvenirs interactifs */}

{

[

{left:"10%",top:"20%"},
{left:"20%",top:"40%"},
{left:"35%",top:"25%"},
{left:"50%",top:"15%"},
{left:"65%",top:"30%"},
{left:"80%",top:"25%"},
{left:"90%",top:"40%"},

{left:"15%",top:"70%"},
{left:"30%",top:"60%"},
{left:"50%",top:"75%"},
{left:"70%",top:"65%"},
{left:"85%",top:"75%"}

]

.map((star,index)=>(

<MemoryStar

key={index}

left={star.left}

top={star.top}

onClick={()=>{

setSelectedMemory(

memories[
index%
memories.length
]

)

}}

 />

))

}


<MemoryModal

memory={selectedMemory}

close={()=>{

setSelectedMemory(null)

}}

/>


{/* Déclencheur temporaire lettre finale */}

<motion.div

onClick={()=>{

setShowFinalLetter(true)

}}

style={{

position:"absolute",

right:"5%",

bottom:"10%",

fontSize:"45px",

cursor:"pointer",

zIndex:50

}}

whileHover={{

scale:1.2

}}

whileTap={{

scale:.9

}}

>

💌

</motion.div>


<motion.div

onClick={()=>{

setShowEnding(true)

}}

style={{

position:"absolute",

right:"5%",

bottom:"22%",

fontSize:"40px",

cursor:"pointer",

zIndex:50

}}

whileHover={{

scale:1.2

}}

>

🌸

</motion.div>

<motion.div

style={{

position:"absolute",
top:"20%",
left:"50%",
fontSize:"45px",
zIndex:4

}}

animate={{

x:["-50%","-50%","-50%"],

scale:[1,1.08,1],

y:[0,-4,0]

}}

transition={{

duration:2.8,

repeat:Infinity

}}

>

❤️

</motion.div>

<div className="romanceBackground"/>

<div className="sceneGround"></div>


<motion.div

className="avatarFrame boyFrame"

onClick={boyClick}

animate={{

scale:
dialogue.speaker==="Lui"
?[1,1.035,1.02]
:0.95,

opacity:
dialogue.speaker==="Lui"
?1
:.55,

y:
dialogue.speaker==="Lui"
?[0,-3,0]
:0

}}

transition={{

duration:2.4,
repeat:

dialogue.speaker==="Lui"
?Infinity
:0

}}

>

<AvatarBoy

mood={boyMood}

isTalking={
dialogue.speaker==="Lui"
}

/>

</motion.div>


<motion.div

className="avatarFrame girlFrame"

onClick={girlClick}

animate={{

scale:
dialogue.speaker==="Elle"
?[1,1.035,1.02]
:0.95,

opacity:
dialogue.speaker==="Elle"
?1
:.55,

y:
dialogue.speaker==="Elle"
?[0,-3,0]
:0

}}

transition={{

duration:2.4,
repeat:

dialogue.speaker==="Elle"
?Infinity
:0

}}

>

<AvatarGirl

mood={girlMood}

isTalking={
dialogue.speaker==="Elle"
}

/>

</motion.div>


<DialogueLetter

speaker={dialogue.speaker}
text={dialogue.text}

/>


<Timeline/>

<FinalLetter

show={showFinalLetter}

close={()=>{

setShowFinalLetter(false)

}}

/>


<EndingScene

show={showEnding}

close={()=>{

setShowEnding(false)

}}

/>

</>

)

}

export default HomeScene
