import Inicio from "./Inicio";
import FlashCard from "./FlashCard"
import { useState } from "react";
import TelaResultado from "./TelaResultado";


export default  function Pagina({decks, telaAtual}){
    const [pagina, setPagina] = useState(telaAtual);
    const [deck, setDeck] = useState()
    const [zaps,setZaps] = useState(0)
    const[metazaps,setMetazaps] = useState(1)
    const [lembrou,setLembrou] = useState(0)
    const[contador,setContador] = useState(1)

    const [aux , setAux] = useState(0)
    if(deck!==undefined && contador>deck.perguntas.length && aux === 0){
        setAux(1)
        setPagina("TelaResultado")
    }    
    
    console.log(metazaps)
    if(metazaps<1){
        setMetazaps(1)
    }


    function PaginaAtual() {
        if (pagina==="Inicio") {
            return(
                <Inicio>
                    {decks}
                    {setPagina}
                    {setDeck}
                    {setMetazaps}
                </Inicio>
            )
        }else if(pagina=== 'FlashCard' ){
            return(
                <FlashCard>
                    {deck}
                    {setZaps}
                    {zaps}
                    {setPagina}
                    {contador}
                    {setContador}
                    {lembrou}
                    {setLembrou}
                </FlashCard>
            )
        }else if(pagina==="TelaResultado") {
            return(
                <TelaResultado>
                    {zaps}
                    {metazaps}
                    {setMetazaps}
                    {setPagina}
                    {setAux}
                    {contador}
                    {setContador}
                    {setZaps}
                    {lembrou}
                    {setLembrou}
                </TelaResultado>
            )
        }
    }
    return(
        <div>
            {PaginaAtual(pagina)}
        </div>
    )
}