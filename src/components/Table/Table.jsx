import Clients from "./Clients/Clients"

import Table from 'react-bootstrap/Table';

const ContactsTable = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th className="contacts__table-head">ID</th>
                    <th className="contacts__table-head">Name</th>
                    <th className="contacts__table-head">Email</th>
                    <th className="contacts__table-head">Number</th>
                    <th className="contacts__table-head">Actions</th>
                </tr>
            </thead>
            <Clients/>
        </Table>
    )   
}

export default ContactsTable