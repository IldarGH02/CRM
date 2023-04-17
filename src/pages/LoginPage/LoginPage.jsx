import { Link } from "react-router-dom"
import routeMain from "./routes"
import {Login} from "components/Login/Login"

const LoginPage = () => {
    return (
        <section className="login">            
            <div className="container">
                <div className="login__content">
                    <Login/> or <Link to='/register'>Registration</Link>                     
                </div>
            </div>            
        </section>
    )
}

export {routeMain}

export default LoginPage