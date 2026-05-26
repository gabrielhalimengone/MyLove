import "./loveCounter.css";

function LoveCounter(){

const startDate=new Date("2021-06-25");

const today=new Date();

const diff=

today-startDate;


/* jours */

const days=Math.floor(

diff/

(1000*60*60*24)

);


/* années */

let years=

today.getFullYear()

-

startDate.getFullYear();


/* mois */

let months=

today.getMonth()

-

startDate.getMonth();


if(

months<0

){

years--;

months+=12;

}


/* jours restants */

let remainingDays=

today.getDate()

-

startDate.getDate();


if(

remainingDays<0

){

months--;

if(months<0){

years--;

months=11;

}

remainingDays+=30;

}


return(

<div className="loveCounter">

💞

<div>

<h3>

Notre histoire

</h3>

<p>

{days} jours ❤️

</p>

<p>

{years} ans • {months} mois • {remainingDays} jours ✨

</p>

<p>

Depuis le 25 Juin 2021

</p>

</div>

</div>

)

}

export default LoveCounter;