import { useState } from "react/cjs/react.development"
import CardFrente from "./CardFrente"
import CardVirado from "./CardVirado"

export default function FlashCard({children}) {
  const [,setZaps,zaps,setPagina,contador,setContador,lembrou,setLembrou] = children
  const perguntas = children[0].perguntas

  const[CardSide,setCardSide] = useState("CardFrente")
  

  if(contador>children[0].perguntas.length){
    setPagina("TelaResultado")
    return
  }
  
  function VirarCarta(CardSide) {
    if (CardSide==="CardFrente") {
      setCardSide("CardVirado")
    }else{
      setCardSide("CardFrente")
    }
  }
  return(
    <div className="flashcard" >
      <img src="assets/logo-mini.png" className="logo-mini"/>
      <h1>{children[0].deck}</h1>

      {CardSide ==="CardFrente"
      ? 
      <CardFrente>
        {perguntas}
        {contador}
        {CardSide}
        {VirarCarta}
      </CardFrente>
      :
      <CardVirado>
        {perguntas}
        {contador}
        {setContador}
        {setCardSide}
        {setZaps} 
        {zaps} 
        {setPagina}
        {lembrou}
        {setLembrou}
      </CardVirado>}
    </div>
  )
}

