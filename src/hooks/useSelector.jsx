import { useEffect, useState } from "react"


export const useSelector = () => {

    const concidencia =new Audio("/audio/concidencia.mp3")
    const sinconcidecia = new Audio("/audio/sinconcidencia.mp3")

    const [adivinada,setAdivinada] = useState([])
    const [selected,setSelected] = useState([])
      useEffect(() => {
   
          if(selected.length === 2){
           if(selected[0].split("ª")[1] === selected[1].split("ª")[1]){
             setAdivinada((adivinada) => adivinada.concat(selected))
             concidencia.play();
           } else {sinconcidecia.play()}
           
           setTimeout(() => setSelected([]),1000)

          }
         },[selected])

       
  
         return {adivinada,selected,setSelected,setAdivinada}
}
