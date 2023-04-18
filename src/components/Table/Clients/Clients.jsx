import Client from "./Client"
import { useSelector } from "react-redux"

const Clients = (props) => {
    const contacts = useSelector(state => state.contacts.users)
    const filtered = useSelector(state => state.contacts.filteredContacts)
    const searchValue = useSelector(state => state.contacts.searchValue)
    const contactsList = searchValue ? filtered : contacts

    return (
        <tbody>
            {contactsList.map((contact, index) => {               
                    return (
                        <Client
                        handleShow={props.handleShow}
                        key={index}
                        {...contact}
                        countId={index}
                        id={contact.id}
                    />
                    )
                })
          }
        </tbody>
    )
}

export default Clients