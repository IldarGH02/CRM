import React, {useState} from "react"
import Input from "components/Input/Input"
import FormButton from "./FormButton/FormButton"

import {Form as FormBootstrap} from "react-bootstrap"

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleChangeLog = (e) => {
        const target = e.target.value
        setEmail(target)
    }

    const handleChangePass = (e) => {
        const target = e.target.value
        setPassword(target)
    }

    return (
        <FormBootstrap className="form">
            <Input
                class='form__input input-email'
                type='email'
                name='Email'
                value={email}
                placeholder='Введите Email'
                handleChange={(e) => handleChangeLog(e)}
            />
            <Input
                class='form__input input-password'
                type='password'
                name='Password'
                value={password}
                placeholder='Введите пароль'
                handleChange={(e) => handleChangePass(e)}
            />
            <FormButton
                name = {title}
                handleClick={() => handleClick(email, password)}
            />
        </FormBootstrap>
    )
}

export {Form}