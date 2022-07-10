import React from 'react'
import {Col, Nav, Row, Tab} from 'react-bootstrap'
import Profile from '../profile/Profile'
import ViewAdvert from '../advert/ViewAdverts'

export default function LeftBar(){
    return(
        <Tab.Container id='menu-tabs'>
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="editprofile">Edit Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="viewadverts">View All Advertisment</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="editadvert">View Your Advertisment</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="editprofile">
                            <Profile/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="viewadverts">
                            <ViewAdvert/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="editadvert">
                            <Nav.Link eventKey="editadvert" href="/editadvert"/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}