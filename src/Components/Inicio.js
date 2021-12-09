export default function Inicio() {
  let botoes = ["Javascript","React","Outracoisa"]

  return(
    <div className="inicio">
      <img className="logo" src="/assets/logo.png"/>

      <input placeholder="Sua meta de zaps"></input>

      <div className="decks">

        {botoes.map(item=>{
          return(
            <button className="botao-inicio" data-identifier="start-zap-recall">
              <p>Praticar {item}</p>
              <img src="/assets/next.png"/>
            </button>
          )})}
       
      </div>

    </div>
  )
}

