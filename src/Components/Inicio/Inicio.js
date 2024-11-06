import Sidebar from "../SideBar/Sidebar"
import CrearResponsiva from "../Responsivas/CrearResponsiva"
import {React, useState} from "react"

const Inicio = () =>{

    const [mostrar, setMostrar] = useState(0)

    return(
        <div>
            <Sidebar setMostrar={setMostrar}/>
            {
                {
                    0: <h1 className="text-center">Bienvenido a Pagina de Administración de TI</h1>,
                    1: <CrearResponsiva />,
                }[mostrar]
            }

        </div>
    )
}
export default Inicio