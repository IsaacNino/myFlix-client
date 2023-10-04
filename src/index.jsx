import { createRoot } from 'react-dom/client'; //import statement for createRoot function
import { MainView } from './components/main-view/main-view'; //import statement for main-view.jsx file
import Container from "react-bootstrap/Container"; //import statement for Container from react-bootstrap

import "./index.scss"; //import statement for index.scss file

const MyFlixApplication = () => { 
    return (
        <Container>
            <MainView />;
        </Container>
    );
};

const container = document.querySelector('#root'); 
const root = createRoot(container); 

root.render(<MyFlixApplication />);