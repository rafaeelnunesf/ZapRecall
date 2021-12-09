export default function TelaResultado() {
  const resultado = [
    {h1:"PARABÉNS! 🥳", p:"Você não esquece de nenhum flashcard!"},
    {h1:"Putz.. 😢", p:"Você esqueceu 2 flashcards.. Não desanime! Na próxima você consegue!"}
  ]
  // {sucesso:{
  //   h1:"PARABÉNS! 🥳",
  //   p:"Você não esquece de nenhum flashcard!"},
  // fracasso:{
  //   h1:"",
  //   p:""
  // }}

  return(
    <div className="resultado" >
      <img src="assets/logo-mini.png" className="logo-mini"/>
      <div>
        <h1>{resultado[1].h1}</h1>
        <p>{resultado[1].p}</p>
        <button className="tentar-novamente">
              <p>Tentar novamente</p>
              <img src="/assets/next.png"/>
            </button>
      </div>
    </div>
  )
}