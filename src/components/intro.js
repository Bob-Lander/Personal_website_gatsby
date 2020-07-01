import React from "react"
import Img from "gatsby-image"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Intro = props => (
    <Container fluid style={containerIntro}>
            <Row>
                <Col>
                    <div style={textIntro}>
                        <h1>Hello everyone !</h1>
                        <h2>This is my website. I hope you'll get all the info you'll need reading what's in it</h2>
                    </div>
                </Col>
                <Col>
                    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                        <Img 
                            title="Profile image"
                            alt="Profile image"
                            fluid={props.introImage.fluid}
                            className="rounded-circle"
                        />
                    </div>
                </Col>
            </Row>
    </Container>
)

const containerIntro = {
    paddingBottom: '1rem',
    paddingTop: '1rem',
    background: 'linear-gradient(90deg, rgba(74,74,74,1) 65%, rgba(2,128,144,1) 100%)',
    textAlign: 'left',
    color: 'white'
}

const textIntro = {
    textAlign: 'center',
    maxWidth: '40%'
}

export default Intro;