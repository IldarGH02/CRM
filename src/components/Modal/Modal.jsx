import { useState } from "react"
import { useDispatch } from "react-redux"
import { setContact } from "store/slices/contactsSlice"
import Modal from 'react-bootstrap/Modal';
import { nanoid } from "nanoid";

import Input from "components/Input/Input"
import CommonButton from "components/CommonButton/CommonButton"

const ModalWindow = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const id = nanoid()
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
    
    const handlePush = (name, email, phone, id) => {
        dispatch(setContact({
            name: name,
            email: email,
            phone: phone,
            id: id
        }))
        setEmail('')
        setName('')
        setPhone('')
    }

    return (
        <div 
            className="modal show"
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
                        title='ФИО'
                        type='text'
                        class='modal__input'
                        placeholder='Введите ФИО'
                        handleChange={(e) => handleChangeName(e)}
                        value={name}
                    />
                    <Input
                        title='E-mail'
                        type='email'
                        class='modal__input'
                        placeholder='Введите E-mail'
                        handleChange={(e) => handleChangeEmail(e)}
                        value={email}
                    />
                    <Input
                        title='Phone'
                        type='tel'
                        class='modal__input'
                        placeholder='Введите номер телефона'
                        handleChange={(e) => handleChangePhone(e)}
                        value={phone}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <CommonButton
                            title='Добавить конаткт'
                            handleClick={() => handlePush(name, email, phone, id)}
                            styles='primary'
                    />
                </Modal.Footer>
            </Modal>
    </div>

        // <div className="overlay">
        //     <div className="modal">
        //         <div className="modal__window">
        //             <div className="modal__content">
        //                 <h2 className="modal__title">{props.title}</h2>
        //                 <Input
        //                     title='ФИО'
        //                     type='text'
        //                     class='modal__input'
        //                     placeholder='Введите ФИО'
        //                     handleChange={(e) => handleChangeName(e)}
        //                     value={name}
        //                 />
        //                 <Input
        //                     title='E-mail'
        //                     type='email'
        //                     class='modal__input'
        //                     placeholder='Введите E-mail'
        //                     handleChange={(e) => handleChangeEmail(e)}
        //                     value={email}
        //                 />
        //                 <Input
        //                     title='Phone'
        //                     type='tel'
        //                     class='modal__input'
        //                     placeholder='Введите номер телефона'
        //                     handleChange={(e) => handleChangePhone(e)}
        //                     value={phone}
        //                 />
        //                 <CommonButton
        //                     title='Добавить конаткт'
        //                     handleClick={handlePush}
        //                     styles='primary'
        //                 />
        //                 <CommonButton
        //                     class='modal__close'
        //                     title='X'
        //                     styles='outline-primary'
        //                     handleClick={handleClose}
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ModalWindow