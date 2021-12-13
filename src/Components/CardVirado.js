import { useState } from "react";
export default function CardVirado({children}) {
    const [perguntas,contador,setContador,setCardSide,setZaps,zaps,setPagina,lembrou,setLembrou] = children
    const [corBorda,setCorBorda] = useState('')
    function mudarCarta() {
        setContador(contador+1);
        if(contador>perguntas.length){
            setPagina("TelaResultado")

            return
        }
        setCorBorda("")
        setCardSide("CardFrente")
    }
    return(
      <div className={`card-virado ${corBorda}`}>
        <div>
          <span>{perguntas[contador-1].Q}</span>
          <span>{`${contador}/${perguntas.length}`}</span>
        </div>
          <h1>
          {perguntas[contador-1].R}
          </h1>
          {corBorda === '' 
            ? 
              <Botoes>
              {setCorBorda}
              {setZaps}
              {zaps}
              {lembrou}
              {setLembrou}
            </Botoes>
            :
            <img src="assets/turn.png" onClick={()=> mudarCarta()}/>}
      </div>
    )
  }
  
  function Botoes({children}) {
    const[setCorBorda,setZaps,zaps,lembrou,setLembrou] = children
    return(
      <div className="botoes">
        <button onClick={()=>setCorBorda("borda-preta")}>Aprendi agora</button>
        <button onClick={()=>setCorBorda("borda-vermelha")}>Não lembrei</button>
        <button onClick={()=>Lembrou(setCorBorda,lembrou,setLembrou)}>Lembrei com esforço</button>
        <button onClick={()=>zap(setCorBorda,setZaps,zaps,lembrou,setLembrou)}>Zap!</button>
    </div>
    )
  }
  function zap(setCorBorda,setZaps,zaps,lembrou,setLembrou) {
    setCorBorda("borda-amarela")
    setZaps(zaps+1)
    setLembrou(lembrou+1)
  }
  function Lembrou(setCorBorda,lembrou,setLembrou,) {
    setCorBorda("borda-verde")
    setLembrou(lembrou+1)
  }