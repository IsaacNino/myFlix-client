import{ useState } from 'react'; //importing useState
import { Form, Button } from 'react-bootstrap'; //importing Form and Button from react-bootstrap

export const SignupView = () => { //exporting signup-view component
    const [username, setUsername] = useState(""); //useState hook to store the state of the username
    const [password, setPassword] = useState(""); //useState hook to store the state of the password
    const [email, setEmail] = useState(""); //useState hook to store the state of the email
    const [birthday, setBirthday] = useState(""); //useState hook to store the state of the birthday
    
    const handleSubmit = (event) => { //handleSubmit function
        event.preventDefault(); //prevents the default refresh of the page

        const data = { //data object
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch ("https://themovieapi.herokuapp.com/users", { //fetch request
            method: "POST", //POST request
            body: JSON.stringify(data), //JSON stringified data
            headers: {
                "Content-Type": "application/json" //content type
            }
        }).then((response) => { //then response
            if (response.ok) { //if response is ok
                alert("Signup successful"); //alert
                window.location.reload(); //reloads the page
            } else { //else
                alert("Signup failed"); //alert
            }
        });
    };


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username} //value prop
                    onChange={(e) => setUsername(e.target.value)} //onChange event handler
                    required //required field
                    minLength="5" //minimum length of 5 characters
                    maxLength="15" //maximum length of 15 characters
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password} //value prop
                    onChange={(e) => setPassword(e.target.value)} //onChange event handler
                    required //required field
                    minLength="5" //minimum length of 5 characters
                    maxLength="15" //maximum length of 15 characters
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email} //value prop
                    onChange={(e) => setEmail(e.target.value)} //onChange event handler
                    required //required field
                />
            </Form.Group>

            <Form.Group controlId="formBirthday">
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Enter birthday"
                    value={birthday} //value prop
                    onChange={(e) => setBirthday(e.target.value)} //onChange event handler
                    required //required field
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};