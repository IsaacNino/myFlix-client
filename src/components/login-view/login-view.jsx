import React from "react"; //importing react

export const LoginView = ({ onLoggedIn }) => { //exporting login-view component
    const [username, setUsername] = useState(""); //useState hook to store the state of the username    
    const [password, setPassword] = useState(""); //useState hook to store the state of the password
    
    
    const handleSubmit = (event) => { //handleSubmit function
        event.preventDefault(); //prevents the default refresh of the page

        const data = { //data object
            Username: username, 
            Password: password
        };

        fetch ("https://themovieapi.herokuapp.com/login", {
            method: "POST", //POST request
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) //stringifies the data object
        }) 
        .then((response) => response.json())
        .then((data) => {
            console.log(data.user, data.token); //logs the user and token
            if (data.user) { //if the user is true, calls the onLoggedIn function
                localStorage.setItem("user", json.stringify(data.user)); //stores the user in localStorage
                localStorage.setItem("token", data.token); //stores the token in localStorage
                onLoggedIn(data.user, data.token); //onLoggedIn prop
            } else {
                alert("This user does not exist.");
            }
        }) .catch((error) => {
            console.log(error);
            alert("Something went wrong");
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <label>
                Username:
                <input 
                type="text" 
                value={username} //value prop
                onChange={(e)=> setUsername(e.target.value)} //onChange event handler
                minlength="5" //minimum length of 5 characters
                maxlength="15" //maximum length of 15 characters
                required //required field
            />
            </label>
            <label>
                Password:
                <input 
                type="password" 
                value={password} //value prop
                onChange={(e)=> setPassword(e.target.value)} //onChange event handler
                required //required field
                />
            </label>
            <button type="submit">
                Submit
            </button>
        </Form>
    );
};