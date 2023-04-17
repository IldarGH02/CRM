import { Button } from "react-bootstrap"

const CommonButton = (props) => {
    return (
        <Button onClick={props.handleClick} className={props.class} variant={props.styles}>{props.title}</Button>
    )
}

export default CommonButton