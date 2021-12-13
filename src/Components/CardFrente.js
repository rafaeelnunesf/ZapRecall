export default function CardFrente({children}) {
    const [perguntas,contador,CardSide,VirarCarta] = children

    return(
      <div className="card-frente">
          <span>{`${contador}/${perguntas.length}`}</span>
          <h1>{perguntas[contador-1].Q}</h1>
          <img src="assets/turn.png"onClick={()=> VirarCarta(CardSide)}/>
      </div>
    )
  }