export default function TelaResultado({children}) {
  const[zaps,metazaps,setMetazaps,setPagina,setAux,contador,setContador,setZaps,lembrou,setLembrou] = children

  const resultado = [
    {h1:"PARABÉNS! 🥳", p:"Você não esqueceu de nenhum flashcard e atingiu sua meta de zaps!"},
    {h1:"Putz.. 😢", p:"Você não esqueceu de nenhum flashcard! Mas não bateu sua meta de zaps😢"},
    {h1:"PARABÉNS! 🥳", p:`Você atingiu sua meta de zaps! mas você esqueceu ${contador-1-lembrou} flashcards.. Não desanime! Na próxima você consegue!`},
    {h1:"Putz.. 😢", p:`Você esqueceu ${contador-1-lembrou} flashcards.. Não desanime! Na próxima você consegue!`}
  ]
  
  if (zaps >= metazaps){
    return(
      <Resultado>
        {resultado[0]}
        {setPagina}
        {setAux}
        {setContador}
        {setZaps}
        {setLembrou}
        {setMetazaps}
      </Resultado>
    )
  }else if(lembrou===contador-1){
      return(
        <Resultado>
          {resultado[1]}
          {setPagina}
          {setAux}
          {setContador}
          {setZaps}
          {setLembrou}
          {setMetazaps}
        </Resultado>
      )
  }else if (zaps >= metazaps && lembrou < contador - 1){
    return(
      <Resultado>
        {resultado[2]}
        {setPagina}
        {setAux}
        {setContador}
        {setZaps}
        {setLembrou}
        {setMetazaps}
      </Resultado>
    )
  }
  else{
    return(
      <Resultado>
        {resultado[3]}
        {setPagina}
        {setAux}
        {setContador}
        {setZaps}
        {setLembrou}
        {setMetazaps}
      </Resultado>
    )

  }
}
function Resultado({children}) {
  const [resultado,setPagina,setAux,setContador,setZaps,setLembrou,setMetazaps] = children
  function voltarInicio(){
    setPagina("Inicio")
    setAux(0)
    setContador(1)
    setZaps(0)
    setLembrou(0)
    setMetazaps(1)
  }

  return(
    <div className="resultado" >
      <img src="assets/logo-mini.png" className="logo-mini"/>
      <div>
        <h1>{resultado.h1}</h1>
        <p>{resultado.p}</p>
        <button className="tentar-novamente" onClick={()=>voltarInicio()}>
              <p>Tentar novamente</p>
              <img src="/assets/next.png"/>
            </button>
      </div>
    </div>
  )
}