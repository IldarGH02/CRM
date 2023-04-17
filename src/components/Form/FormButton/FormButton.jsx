import { Button } from "react-bootstrap"

const FormButton = (props) => {
    return (
        <Button variant="outline-primary" className="form__button send-button" onClick={props.handleClick}>{props.name}</Button>
    )
}

export default FormButton