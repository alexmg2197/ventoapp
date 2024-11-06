import './sidebar.css'
import { React, useEffect, useState } from "react";
import Logo from '../../img/vento-logo.png'

const Sidebar = ({ setMostrar }) =>{

    const [mostrarResponsiva, setMostrarResponsiva] = useState(false)

    const toggleVisibilidadResponsiva = () =>{
        setMostrarResponsiva(!mostrarResponsiva)
    }

    return(
        <aside className="main-sidebar elevation-4">
             <div className='text-center'>
                <a href="/" className='brand-link'>
                    <img src={Logo} alt="logo" className='img' />
                </a>
            </div>

            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav navpills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item ">
                            <a className="nav-link" href="/">
                                <svg className='nav-icon' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg> 
                                <p>Home</p>
                            </a>
                        </li>
                        <li className="nav-item menu-open">
                            <a className="nav-link" onClick={toggleVisibilidadResponsiva}>
                                <svg className='nav-icon' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path fill="currentColor" d="M26.836 2.875v17.203c0 3 1.406 4.43 4.406 4.43h16.969v21.281c0 4.875-2.414 7.336-7.266 7.336h-24.89c-4.828 0-7.266-2.437-7.266-7.336V10.234c0-4.875 2.438-7.359 7.266-7.359zm1.67 35.727c-5.254 0-8.523 3.603-8.523 6.214c0 .891.567 1.346 2.166 1.346h12.712c1.589 0 2.156-.455 2.156-1.346c0-2.61-3.27-6.214-8.512-6.214m0-10.637c-2.167 0-4.05 1.893-4.05 4.373c0 2.51 1.883 4.453 4.05 4.453c2.175 0 4.047-1.944 4.047-4.474c0-2.5-1.882-4.352-4.048-4.352m1.517-24.832c.985.164 1.97.844 3.047 1.968l12.94 13.149c1.101 1.148 1.781 2.086 1.945 3.047h-16.64c-.844 0-1.29-.422-1.29-1.266Z"/></svg>
                                <p>Responsivas
                                    {!mostrarResponsiva ? <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m11.29 12l3.54-3.54a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 0 0 0 1.42L13.41 17a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41Z"/></svg> : < i className="right fas fa-angle-up"></i>}
                                </p>
                            </a>
                            {
                                mostrarResponsiva && (
                                    <ul className="nav nav-treeview">
                                        <div className="">
                                            <li className="nav-item ">
                                                <a className="nav-link " onClick={() => { setMostrar(1) }}>
                                                    <i className="nav-icon fa-solid fa-calendar-plus"></i>
                                                    <p>Crear Responsiva
                                                    </p>
                                                </a>
                                            </li>
                                                <li className="nav-item ">
                                                    <a className="nav-link " onClick={() => { setMostrar(2) }}>
                                                        <i className="nav-icon fa-solid fa-eye"></i> <p>Ver Responsiva</p>
                                                    </a>
                                                </li>
                                        </div>
                                    </ul>
                                )
                            }
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar