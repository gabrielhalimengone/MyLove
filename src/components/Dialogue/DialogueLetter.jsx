import "./dialogueLetter.css";

function DialogueLetter({ speaker, text }) {

const isBoy = speaker === "him" || speaker === "Lui";

return (

<div className={`letterContainer ${isBoy ? "boyLetter":"girlLetter"}`}>

<div className="letterDecor">

{isBoy

?

"✦ ✧ ✦"

:

"💗 ✨ 💗"}

</div>

<div className="letterName">

{isBoy ? "Lui" : "Elle"}

</div>

<div className="letterText">

{text}

</div>

</div>

)

}

export default DialogueLetter;
