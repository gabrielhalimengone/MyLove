import { useState } from "react"

export default function useAvatarMood(){

  const [mood,setMood]=useState("neutral")

  const changeMood=(newMood)=>{

    setMood(newMood)

  }

  return{

    mood,
    changeMood

  }
}
