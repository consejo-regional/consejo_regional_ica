import React from "react"
import { ReactComponent as PeriodicoIconoo } from "../../../iconos/heartBeat.svg";



const Loader=()=>(
    <>
    <div className="loader">

     <div className="loader_svg">
        <div className="heart-rate">
            <PeriodicoIconoo />

            <div className="fade-in"></div>
            <div className="fade-out"></div>
        </div>
     
     </div>

    
       
    </div>
    </>
)

export default  Loader