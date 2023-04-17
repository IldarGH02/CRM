import Table from "components/Table/Table"
import routeMain from "./routes"
import CommonButton from "components/CommonButton/CommonButton"
import ModalWindow from "components/Modal/Modal"
import { useState } from "react"

const ContactsPage = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <section className="contacts">
            <div className="contacts__container">
                <div className="contacts__top">
                    <h1 className="contacts__title">Список контактов</h1>
                    <CommonButton
                        class='contacts__add button'
                        title='Добавить новый контакт'
                        styles='primary'
                        handleClick={handleShow}
                    />
                </div>
                <div className="contacts__content">
                    <Table/>
                </div>
            </div>
            <ModalWindow
                show={show}
                handleClose={handleClose}
                title='Добавить новый контакт'
            />
        </section>
    )
}

export {routeMain}

export default ContactsPage
