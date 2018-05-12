import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class AboutPage extends Component {

    mySkills() {
        return this.props.location.state
    }

    renderHome = () => {
        this.props.history.push("/")
    };

    render() {
        console.log(this.props.location.state)
        return (
            <div className="container container-style">
                <h2 className="main-header">React Tutorial</h2>
                <button className="button" onClick={this.renderHome}>Home</button>
                <hr />
                <h2>My name is Emmanuel Perez,</h2>
                <p>I'm a junior web developer who recently graduated from DecodeMTL.</p>
                <h5>MY SKILLS</h5>
                <ul>
                    {this.mySkills().map(x => <li>{x}</li>)}
                </ul>
                <hr />
                 <h4 className="text-center">You can view my resume <a href="https://docs.google.com/document/d/1kUg102acf8BV4rMA1wyFisX9PCcOAwgGgcT0wS9bDTQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" >HERE</a></h4>
                <hr />
                <h2>P R O J E C T S</h2>

                <Grid>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <h4>WhatsLit</h4>
                            <p>A web app that allows users to simplify their night life experience.</p>
                            <iframe title="project1" width="380" height="250" src="https://www.youtube.com/embed/2gOtNjfhYjE" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <h4>Alibay Marketplace</h4>
                            <p>A marketplace website, allowing users to buy and sell items from other members.</p>
                            <iframe title="project2" width="380" height="250" src="https://www.youtube.com/embed/Jc7LbmBa-dU" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </Col>
                    </Row>
                    
                    <Row>
                        <hr/>
                        <Col sm={12} md={6} lg={6}>
                            <h4>Nayan Cat Game</h4>
                            <p>Object-oriented programming project</p>
                            <iframe title="project3" width="380" height="250" src="https://www.youtube.com/embed/KgsA_YL-3FU" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <h4>Tribute Page</h4>
                            <p>Responsive Terminator 2 tribute page - Hosted on CodePen</p>
                            <a href="https://codepen.io/rezz88/full/RMzrPv/" target="_blank" rel="noopener noreferrer"><img title="project4" width="380" height="250" src="https://i.imgur.com/z9E4RE7.jpg" alt="Terminator 2"/></a>
                        </Col>
                    </Row>
                    
                </Grid>
            </div>
        );
    }
}

export default AboutPage;