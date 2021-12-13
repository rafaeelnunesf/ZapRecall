export default function Inicio({children}) {
    const [decks,setPagina,setDeck,setMetazaps] = children
    function abrirDeck(deck) {
      setPagina("FlashCard")
      setDeck(deck) 
    }
  return(
    <div className="inicio">
      <img className="logo" src="/assets/logo.png"/>

      <input placeholder="Sua meta de zaps" type="number"  onChange={(e) => setMetazaps(e.target.value)}></input>

      <div className="decks">

        {decks.map(item=>{
          return(
            <button className="botao-inicio" data-identifier="start-zap-recall" onClick={()=> abrirDeck(item)}>
              <p>Praticar {item.deck}</p>
              <img src="/assets/next.png"/>
            </button>
            
          )})}

      </div>

    </div>
  )
}