import React, { useEffect, useState } from 'react'
import {Col, Nav, Row, Tab} from 'react-bootstrap'
import Profile from '../profile/Profile'
import ViewAdvert from '../advert/ViewAdverts'
import Editadvert from '../advert/Editadvert'
import Addadvert from '../advert/Addadvert'
import JobHistory from '../job/JobHistory'
import ApplyJob from '../job/ApplyJob'


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
                        <Nav.Item>
                            <Nav.Link eventKey="addadvert">Add Advertisment</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="jobHistory">View JobHistory</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="applyJob">Apply job</Nav.Link>
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
                            {/* <Nav.Link eventKey="editadvert" href="/editadvert"/> */}
                            <Editadvert/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="addadvert">
                            <Addadvert/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="jobHistory">
                            <JobHistory/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="applyJob">
                            <ApplyJob/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}