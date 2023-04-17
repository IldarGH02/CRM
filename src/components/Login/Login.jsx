import { useNavigate } from 'react-router-dom';

import { Form } from 'components/Form/Form';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate('/contacts')
            })
            .catch(console.error)
    }

    return (
        <div className="login__form">
            <Form
                title='Sign In'
                handleClick={handleLogin}
            />
        </div>
    )
}

export {Login}