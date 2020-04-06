import React, {Component} from 'react'



import {Col, Container, Row, Spinner} from "react-bootstrap";

import './styles/App.scss';

class App extends Component {
    render() {
        return (
            <h1 className="header-text">Chirper Application!</h1>
            // <Container fluid >
            //     <Row>
            //         <Col><h1 className="app">Chirper Application!</h1></Col>
            //         <Spinner animation="border" role="status">
            //             <span className="sr-only">Loading...</span>
            //         </Spinner>
            //     </Row>
            // </Container>
        )
    }
}

export default App
