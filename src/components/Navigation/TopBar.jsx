import "./topbar.css"
import MusicPlayer from "../Audio/MusicPlayer"

function TopBar(){

return(

<div className="topbar">

<div className="logo">

Our Story ❤️

</div>


<div className="topIcons">

<MusicPlayer/>

<button>

🌙

</button>

<button>

✨

</button>

</div>

</div>

)

}

export default TopBar