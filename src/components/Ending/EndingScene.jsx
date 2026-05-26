import { motion } from "framer-motion";
import "./ending.css";

function EndingScene({

show,
close

}){

if(!show) return null;

return(

<div
className="endingOverlay"
onClick={close}
>

<div
className="endingContent"
onClick={(e)=>e.stopPropagation()}
>

<motion.div

className="endingCouple"

animate={{

y:[0,-8,0]

}}

transition={{

duration:2,
repeat:Infinity

}}

>

<img
src="/avatars/him/neutral.png"
alt=""
/>

<img
src="/avatars/her/neutral.png"
alt=""
/>

</motion.div>


<motion.h1

initial={{

opacity:0

}}

animate={{

opacity:1

}}

transition={{

delay:.5

}}

>

To be continued...

</motion.h1>


<motion.div

className="endingHearts"

animate={{

scale:[1,1.1,1]

}}

transition={{

duration:2,
repeat:Infinity

}}

>

❤️ ✨ ❤️

</motion.div>

</div>

</div>

)

}

export default EndingScene