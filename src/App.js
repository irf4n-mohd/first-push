import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";

const App=()=>{
  return(
    <React.Fragment>
      <Container fulid>
        <NavBar/>
      </Container>
    </React.Fragment>
  )
}
export default App;

