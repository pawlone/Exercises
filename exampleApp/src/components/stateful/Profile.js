import { useState } from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const calcAge = (year) => {
    let date = new Date();
    const currentYear = date.getFullYear();
    return currentYear - year;
}

const Profile = ({ firstname = "Mario", lastname = "Rossi", year = 1994 }) => {
    const [userData, setData] = useState(() => {
        const initialData = {
            fname: firstname,
            lname: lastname,
            age: calcAge(year)
        };
        return initialData;
    })

    const changeFirstName = () => {
        setData((lastData) => {
            if (lastData.fname === "Mario") {
                return {
                    ...lastData,
                    fname: "Mariuccio",
                }
            }
            else {
                return {
                    ...lastData,
                    fname: "Mario"
                }
            }
        });
    }

    return (
        <>
            <Row className="text-center mt-3">
                <Col xs={12} md={6}>
                    <span className="border p-2">
                        {userData.fname}
                    </span>
                </Col>
                <Col xs={12} md={6}>
                    <span className="border p-2">
                        {userData.lname}
                    </span>
                </Col>
                <Col xs={12}>
                    <span className="border p-2">
                        {userData.age}
                    </span>
                </Col>
                <Col xs={12}>
                    <div className="mt-3 p-2">
                        <Button variant="outline-primary" onClick={() => { changeFirstName() }}>Cambia</Button>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Profile;