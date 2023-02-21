import { useEffect, useState } from "react"
import { frontImg, gatos } from "../../vistaGatos"
import { useSelector } from "../../hooks/useSelector"


export const Cards = () => {

  const {adivinada,selected,setSelected} = useSelector()

  const [modal,setModal]= useState(false)

  const imagenes = gatos

  const music = new Audio("/audio/music.mp3")

  

  useEffect(()=>{

    if(adivinada.length === 12) {
      setModal(true)
      
    } },[adivinada])

  useEffect(()=>{music.play()},[])
   
  return (
    <>
      {
        (!modal) ?<>
          {
          imagenes.map(image =>{
            const [,url] = image.split("ª")
            
          return(
          <div className="card-layout__item animate__animated animate__bounceIn "
              key={image}
              onClick={()=>selected.length < 2 && setSelected(selected => selected.concat(image)) }
            >
  
            {selected.includes(image) || adivinada.includes(image) ?

            ( <img src={url} alt="img" className="animate__animated animate__bounceIn" />)
             : 
            (<img src={frontImg} alt="img" className="front-img" />)
  
  
           }
            
          </div>
           )
           })
           }
        </>
        : 
        <div className="win2 animate__animated animate__headShake  ">
            <h1 
            className="win">
              Ganaste!</h1>
           <button 
             onClick={()=>location.reload()}>
              reiniciar</button>
        </div>
            
        
      }
    </>
  )
}
