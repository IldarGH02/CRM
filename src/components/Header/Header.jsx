import changeToUpperCase from "utils/toUpperCase"
import Input from "components/Input/Input"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchContact } from "store/slices/contactsSlice"


const Header = (props) => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        dispatch(searchContact(e.target.value))
        setValue(e.target.value)
    }

    return (
        <header className="header">
            <div className="header__content">
                <Input
                    class='header__search'
                    type='text'
                    placeholder='Поиск по имени'
                    value={value}
                    handleChange={(e) => handleChange(e)}
                />
                <div className="header__user">{changeToUpperCase(props.user)}</div>
            </div>
        </header>
    )
}

export default Header