import React from "react"
import ReactPlayer from "react-player"
import Galeriavideos from "../../../data/galeriaVideos"



const informacion=Galeriavideos


const GaleriaVideos = ()=>(
    <>
       
        <div className="contenedor_videos_central">
        <div className="contenedor_videos_central_titulo">
            <h1>GALERÍA: CURSO</h1>
        </div>
            <div className="contenedor_videos">

                {informacion.map(c=>(
                    <div className="contenedor_videos_individual">
                    <ReactPlayer
                        className='react-player'
                        url={c.url}
                        width='100%'
                        height='100%'
                        controls={true}
                        />
                        <div className='contenedor_videos_individual_titulo'> {c.titulo}</div>
                        <div className='contenedor_videos_individual_titulo'> {c.fecha}</div>
                    </div>
                ))
                }
                </div>

        </div>

    </>
)

export default  GaleriaVideos