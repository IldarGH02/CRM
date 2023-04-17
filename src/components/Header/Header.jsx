import changeToUpperCase from "utils/toUpperCase"
import Input from "components/Input/Input"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { searchContact } from "store/slices/contactsSlice"


const Header = (props) => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        const target = e.target.value
        setValue(target)
    }

    useEffect(() => {
        dispatch(searchContact(value))
    }, [value, dispatch])

    return (
        <header className="header">
            <div className="header__content">
                <Input
                    class='header__search'
                    type='text'
                    placeholder='Поиск по имени'
                    value={value}
                    handleChange={(e) => handleChange(e, value)}
                />
                <div className="header__user">{changeToUpperCase(props.user)}</div>
            </div>
        </header>
    )
}

export default Header