function AmbientParticles(){

const particles=[...Array(25)];

return(

<>

{

particles.map((_,i)=>(

<div

key={i}

className="ambientParticle"

style={{

left:`${Math.random()*100}%`,
animationDelay:`${Math.random()*8}s`,
animationDuration:`${8+Math.random()*8}s`

}}

>

{

i%6===0
?"💗"

:

i%3===0
?"🌸"

:

"✨"

}

</div>

))

}

</>

)

}

export default AmbientParticles;