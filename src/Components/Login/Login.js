import './login.css'
import { useNavigate } from 'react-router-dom'


const Login = () =>{

    const navigate = useNavigate()

    const getInicio = () =>{
        navigate('/Inicio')
    }

    return(
        <div className='hold-transition login-page'>
            <div className="login-box">
                <div class="card card-outline card-primary">
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <h1> <b>VENTO</b></h1>
                        </div>
                        <div className="card-body">
                            <p className='login-box-msg'>Inicia Sesión</p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input type="email" className='form-control' placeholder='Correo' />
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="password" class="form-control" placeholder="Password"/>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.01em" height="1em" viewBox="0 0 1025 1024"><path fill="currentColor" d="M641.325 1024q-104.5 0-193-51.5T308.825 833t-51-193q0-82 35-159h-67V321h-62l-34-35v-61h-61l-3-3v-61h-57q-8-16-6-33h-2V0h128v2q28-3 47 15l284 285q85-45 181-45q105 0 193 51t139.5 139.5t51.5 193t-51.5 192.5t-139.5 139.5t-192.5 51.5M98.825 33l-33 33l319 319l33-33zm606 543q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5"/></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='social-auth-links text-center mt-2 mb-3'>
                                    <button type="submit" className="btn btn-block btn-primary" onClick={getInicio}>Iniciar Sesión</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login