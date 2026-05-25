import { motion } from "framer-motion";

import {

girlExpressions,
getExpression

}

from "./expressions";

function AvatarGirl({

mood="neutral",
isTalking=false

}){

return(

<motion.img

src={
getExpression(
girlExpressions,
mood
)
}

className="avatar girl"

animate={{

y:[0,-3,0],

rotate:
isTalking
?
[0,1,-1,0]
:
0,

x:
isTalking
?
[0,-2,0]
:
0

}}

transition={{

duration:3.2,

repeat:Infinity

}}

whileHover={{

scale:1.03

}}

alt="Girl Avatar"

/>

)

}

export default AvatarGirl
