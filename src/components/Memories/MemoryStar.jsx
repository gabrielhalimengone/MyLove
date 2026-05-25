import "./memories.css"
import { motion } from "framer-motion"

function MemoryStar({

left,
top,
onClick

}){

return(

<motion.div

className="memoryStar"

style={{

left,
top

}}

onClick={onClick}

animate={{

scale:[1,1.2,1],

opacity:[0.5,1,0.5]

}}

transition={{

duration:2,

repeat:Infinity,

ease:"easeInOut"

}}

whileHover={{

scale:1.5,

rotate:15

}}

whileTap={{

scale:.9

}}

>

✨

</motion.div>

)

}

export default MemoryStar