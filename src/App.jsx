
import { useState } from "react"
import { Cards } from "./components/cards/cards"







function App() {

 
 
  const [home ,setHome] =useState(false)

  
  return(
   <div className="fondo">
   <div className="container">
   {
    home && <h1 className="animate__animated animate__fadeIn">Memo gatos</h1>
   }
   
   
    { !home
      ? <>
       <h1 className="animate__animated animate__flip">HOME</h1>
      <button 
        className="animate__animated animate__fadeInDown"
        onClick={()=>{setHome(true)}}>
        MemoTest
        </button>
        </>
      :
      <div className="card-layout ">
       
      <Cards setHome={setHome} />
    </div>

    }
   </div>
    
   </div>
  )

 
}
export default App
