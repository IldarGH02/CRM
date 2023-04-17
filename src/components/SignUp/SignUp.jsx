import { Form } from 'components/Form/Form';

import { useNavigate } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";

const SignUp = () => {
    const dispatch = useDispatch()  
    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
        <div className="register__form">
            <Form
                title='Sign Up'
                handleClick={handleRegister}
            />
        </div>
    )
}

export {SignUp}