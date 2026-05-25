import "./timeline.css";
import { timeline } from "../../data/timelineData";

function Timeline(){

return(

<div className="timelineContainer">

<h2>

📅 Notre Histoire

</h2>

<div className="timeline">

{

timeline.map((item)=>(

<div

key={item.id}

className="timelineCard"

>

<img
src={item.image}
alt=""
/>

<h3>

{item.title}

</h3>

<p>

{item.description}

</p>

<span>

{item.date}

</span>

</div>

))

}

</div>

</div>

)

}

export default Timeline