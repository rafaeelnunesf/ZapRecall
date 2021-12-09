export default function FlashCard() {
  return(
    <div className="flashcard" >
      <img src="assets/logo-mini.png" className="logo-mini"/>

      <h1>React</h1>
      <CardVirado/>
    </div>
  )
}
function CardFrente() {
  return(
    <div className="card-frente">
        <span>1/8</span>
        <h1>O que é Jsx?</h1>
        <img src="assets/turn.png"/>
    </div>
  )
}
function CardVirado() {
  return(
    <div className="card-virado"> {/* Adicionar classes para as bordas */}
      <div>
        <span>O que é Jsx?</span>
        <span>1/8</span>
      </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras tortor at auctor diam.
        </h1>
        <img src="assets/turn.png"/> {/* Trocar por Botoes */}
    </div>
  )
}

function Botoes() {
  return(
    <div className="botoes">
      <button>Aprendi agora</button>
      <button>Não lembrei</button>
      <button>Lembrei com esforço</button>
      <button>Zap!</button>
  </div>
  )
}