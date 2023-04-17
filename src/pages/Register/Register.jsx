import {SignUp} from "components/SignUp/SignUp"
import routeMain from "./routes"
import { Link } from "react-router-dom"

const Register = () => {
    return(
        <section className="register">
            <div className="container">
                <div className="register__content">
                    <SignUp/>
                    <p className="register__action">
                        Are you have account? <Link to='/login'>Sign In</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export {routeMain}

export default Register