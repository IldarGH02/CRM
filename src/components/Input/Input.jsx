import Form from "react-bootstrap/Form"

const Input = (props) => {
    return (
        <Form.Control className={props.class} type={props.type} value={props.value} onChange={props.handleChange} placeholder={props.placeholder}/>
    )
}

export default Input