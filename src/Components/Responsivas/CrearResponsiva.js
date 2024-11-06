import './crearResponsiva.css'
import jsPDF from 'jspdf';
import React from 'react';
import { Formik } from 'formik'

const CrearResponsiva = () =>{

    return(
        <>
            <div className="d-flex justify-content-center">
                <div className="card card-primary mt-3 w-50">
                    <div className="card-header">
                        <h3 className="card-title">
                            Crear Responsiva
                        </h3>
                    </div>
                    <form >
                            <div className="card-body ">
                        <h3 className='text-center p-0 m-0'>Datos del Responsable del Equipo</h3>
                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="nombre" className="form-label" >Nombre:</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="nombre" className="form-label" >Area:</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="nombre" className="form-label" >Responsable del Area:</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>
                                </div>
                        <h3 className='text-center p-0 m-0'>Datos del Equipo</h3>
                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="nombre" className="form-label" >Marca:</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="nombre" className="form-label" >Modelo:</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="nombre" className="form-label" >No. de Serie:</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="nombre" className="form-label" >Sistema Operativo:</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="nombre" className="form-label" >Memoria RAM:</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="nombre" className="form-label" >Procesador:</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="nombre" className="form-label" >Disco Duro:</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="nombre" className="form-label" >Placa Activo:</label>
                                        <input type="text" className="form-control" id="nombre" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Agendar</button>
                            </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default CrearResponsiva