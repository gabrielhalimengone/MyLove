import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import IntroScene from "./scenes/IntroScene";
import HomeScene from "./scenes/HomeScene";

function App(){

const [entered,setEntered]=useState(false);

return(

<AnimatePresence mode="wait">

{

!entered

?

<motion.div

key="intro"

exit={{

opacity:0

}}

transition={{

duration:1

}}

>

<IntroScene

enterSite={()=>{

setEntered(true)

}}

/>

</motion.div>

:

<motion.div

key="home"

initial={{

opacity:0

}}

animate={{

opacity:1

}}

transition={{

duration:1.2

}}

>

<HomeScene/>

</motion.div>

}

</AnimatePresence>

)

}

export default App