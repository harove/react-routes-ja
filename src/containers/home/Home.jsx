import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col,Card} from 'reactstrap'

class Home extends Component {
    render() {
        return (

            <Container className="home">
                <Row>
                    Home
                    <Link to = "/login">login</Link>
                </Row>                
            </Container>
        )
    }
}
export default Home;