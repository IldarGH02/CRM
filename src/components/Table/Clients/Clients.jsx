import Client from "./Client"
import { useSelector } from "react-redux"

const Clients = () => {
    const contacts = useSelector(state => state.contacts.users)

    return (
        <tbody>
            {contacts.map((contact, index) => {               
                    return (
                        <Client
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