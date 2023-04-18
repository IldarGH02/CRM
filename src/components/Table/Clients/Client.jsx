import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBin5Line } from "react-icons/ri"
import { useDispatch } from "react-redux"
import { removeContact } from "store/slices/contactsSlice"

const Client = ({id, name, email, phone, countId, handleShow}) => {
    const dispatch = useDispatch()

    const deleteContact = (id) => {
        dispatch((removeContact({id})))
    }

    return (
        <tr>
            <td className="contact__info count__value">{countId}</td>
            <td className="contact__info name__value">{name}</td>
            <td className="contact__info email__value">{email}</td>
            <td className="contact__info phone__value">{phone}</td>
            <td className="contact__info actions">                
                <RiDeleteBin5Line
                    onClick={() => deleteContact(id)}
                    className="contacts__actions contact__delete"
                />

                <AiFillEdit
                    onClick={handleShow}
                    className="contacts__actions contact__edit"
                />
            </td>
        </tr>
    )
}

export default Client