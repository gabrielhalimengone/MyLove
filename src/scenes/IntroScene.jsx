import { motion } from "framer-motion";
import "../components/Intro/intro.css";

function IntroScene({ enterSite }) {

return(

<div className="introContainer">

<motion.img

src="/intro/banner.png?v=2"

className="introBanner"

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
duration:1.5
}}

/>

<div className="introOverlay"/>

<motion.button

className="enterButton"

onClick={enterSite}

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:1,
duration:1
}}

whileHover={{
scale:1.05
}}

whileTap={{
scale:.95
}}

>

""

</motion.button>

</div>

)

}

export default IntroScene