import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LeftBar from './LeftBar'

export default function UserLandingPage(){
    return(
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <div>
                            <li>
                                <ul>1</ul>
                                <ul>2</ul>
                                <ul>3</ul>
                            </li>
                        </div>
                    </Col>
                    <Col xs lg="2"><LeftBar/></Col>
                </Row>
            </Container>
        </div>
    )
}