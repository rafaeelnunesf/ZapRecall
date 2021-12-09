export default function Inicio() {
  return(
    <div className="inicio">
      <img className="logo" src="/assets/logo.png"/>

      <input placeholder="Sua meta de zaps"></input>

      <div className="decks">

        <button className="botao-inicio">
          <p>Praticar JavaScript</p>
          <img src="/assets/next.png"/>
        </button>

        <button className="botao-inicio">
          <p>Praticar react</p>
          <img src="/assets/next.png"/>
        </button>

        <button className="botao-inicio">
          <p>Praticar react</p>
          <img src="/assets/next.png"/>
        </button>
        
      </div>

    </div>
  )
}