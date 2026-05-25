import "./memories.css"

function MemoryModal({

memory,
close

}){

if(!memory) return null

return(

<div
className="memoryOverlay"
onClick={close}
>

<div
className="memoryCard"
onClick={(e)=>e.stopPropagation()}
>

<img
src={memory.image}
alt=""
/>

<h2>

{memory.title}

</h2>


<div className="memoryReaction">

{

memory.reaction==="love"

?"❤️"

:

memory.reaction==="happy"

?"😭"

:

"✨"

}

</div>

<p>

{memory.description}

</p>

</div>

</div>

)

}

export default MemoryModal