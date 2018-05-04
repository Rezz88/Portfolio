import React, { Component } from 'react';

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
            <div className="container">
                <h3 className="main-header">React Tutorial</h3>
                <button onClick={this.renderHome}>Home</button>
                <hr/>
                <h2>My name is Emmanuel Perez,</h2>
                <p>I'm a junior web developer who recently graduated from DecodeMTL.</p>
                <h5>MY SKILLS</h5>
                <ul>
                    {this.mySkills().map( x => <li>{x}</li>)}
                </ul>
                <div>
                    <h4>You can view my resume <a href="https://docs.google.com/document/d/1kUg102acf8BV4rMA1wyFisX9PCcOAwgGgcT0wS9bDTQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" >HERE</a></h4>
                    
                </div>
            </div>
        );
    }
}

export default AboutPage;