import React from 'react'
import { Button, Col, Nav, Row, Tab } from 'react-bootstrap'
import Profile from '../../components/profile/Profile'
import ViewAdvert from '../../components/advert/ViewAdvert'
import UserAdvert from '../../components/student/UserAdvert'
import LandingInfo from './LandingInfo'
import AddExperience from '../../components/student/AddExperience'

export default function LeftBar() {
    return(
        <Tab.Container className="leftCol" id='menu-tabs'>
            <Row>
                <Col sm={2}>
    <Nav variant="pills" className="flex-column">
        <Nav.Item>
            <Nav.Link eventKey="landinginfo">Welcome</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="viewprofile">View Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="viewadverts">View All Advertisment</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="useradvert">View Your Advertisment</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="addexp">Add Experience</Nav.Link>
        </Nav.Item>
    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                    <Tab.Pane eventKey="landinginfo">
                            <LandingInfo/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="viewprofile">
                            <Profile/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="viewadverts">
                            <ViewAdvert/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="useradvert">
                            <UserAdvert/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="addexp">
                            <AddExperience/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )


    // return (
    //     <div>
    //         <Nav fill varient="tabs" defaultActiveKey="landinginfo">
    //             <Nav.Item>
    //                 <Nav.Link href="landinginfo">Welcome</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link href="viewprofile">View Profile</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link href="viewadverts">View All Advertisment</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link href="useradvert">View Your Advertisment</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //                 <Nav.Link href="addexp">Add Experience</Nav.Link>
    //             </Nav.Item>
    //         </Nav>
    //     </div>
    // )
}