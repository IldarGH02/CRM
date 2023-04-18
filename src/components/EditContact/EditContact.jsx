import { useState } from "react"
import { useDispatch } from "react-redux"
import { editContact } from "store/slices/contactsSlice"
import Modal from 'react-bootstrap/Modal';

import Input from "components/Input/Input"
import CommonButton from "components/CommonButton/CommonButton"

const EditContact = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()

    const handleChangeName = (e) => {
        const target = e.target.value
        setName(target)
    }

    const handleChangeEmail = (e) => {
        const target = e.target.value
        setEmail(target)
    }

    const handleChangePhone = (e) => {
        const target = e.target.value
        setPhone(target)
    }
    
    const handleEdit = (name, email, phone) => {
        dispatch(editContact({
            name: name,
            email: email,
            phone: phone
        }))
        setEmail('')
        setName('')
        setPhone('')
    }

    return (
        <div 
            className="modal show edit"
            style={{display: "block", position: "initial"}}
        >
            <Modal 
                show={props.show}
                onHide={props.handleClose}
                backdrop='static'
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Input
                        title='Изменить ФИО'
                        type='text'
                        class='modal__input'
                        placeholder='Введите ФИО'
                        handleChange={(e) => handleChangeName(e)}
                        value={name}
                    />
                    <Input
                        title='Изменить E-mail'
                        type='email'
                        class='modal__input'
                        placeholder='Введите E-mail'
                        handleChange={(e) => handleChangeEmail(e)}
                        value={email}
                    />
                    <Input
                        title='Изменить номер телефона'
                        type='tel'
                        class='modal__input'
                        placeholder='Введите номер телефона'
                        handleChange={(e) => handleChangePhone(e)}
                        value={phone}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <CommonButton
                            title='Изменить данные'
                            handleClick={() => handleEdit(name, email, phone)}
                            styles='primary'
                    />
                </Modal.Footer>
            </Modal>
    </div>
    )
}

export default EditContact