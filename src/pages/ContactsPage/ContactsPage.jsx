import Table from "components/Table/Table"
import routeMain from "./routes"
import CommonButton from "components/CommonButton/CommonButton"
import ModalWindow from "components/Modal/Modal"
import { useState } from "react"
import EditContact from "components/EditContact/EditContact"

const ContactsPage = () => {
    const [modalAdd, setModalAdd] = useState(false)
    const [editModal, setEditModal] = useState(false)

    const showModalAdd = () => {
        setModalAdd(true)
        console.log('click')
    }

    const showModalEdit = () => {
        setEditModal(true)
    }

    const handleCloseAdd = () => {
        setModalAdd(false)
    }

    const handleCloseEdit = () => {
        setEditModal(false)
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
                        handleClick={showModalAdd}
                    />
                </div>
                <div className="contacts__content">
                    <Table
                        handleShow={showModalEdit}
                    />
                </div>
            </div>
            <ModalWindow
                show={modalAdd}
                handleClose={handleCloseAdd}
                title='Добавить новый контакт'
            />
            <EditContact
                show={editModal}
                handleClose={handleCloseEdit}
                title='Изменить данные контакта'
            />
        </section>
    )
}

export {routeMain}

export default ContactsPage
