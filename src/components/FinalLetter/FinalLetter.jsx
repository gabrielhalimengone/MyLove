import "./finalLetter.css";

function FinalLetter({

show,
close

}){

if(!show) return null;

return(

<div
className="finalOverlay"
onClick={close}
>

<div
className="finalCard"
onClick={(e)=>e.stopPropagation()}
>

<div className="finalHearts">

💗 ✨ 💗

</div>

<h1>

À toi ❤️

</h1>

<p>

Chaque moment passé ensemble
a rendu cette histoire plus belle.

Merci pour les rires,
les souvenirs,
les moments simples,
et tous les petits détails.

Joyeux anniversaire ❤️

</p>

<button
onClick={close}
>

Fermer

</button>

</div>

</div>

)

}

export default FinalLetter