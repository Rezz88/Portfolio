import React, { Component } from 'react';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
          skills: [
            "React",
            "Javascripts",
            "HTML",
            "CSS",
            "NodeJS",
            "ExpressJS",
            "jQuery",
            "Bootstrap"
          ]
        }
      };

    renderAbout = () => {
        this.props.history.push("/about", this.state.skills);
    }

    renderTodo = () => {
        this.props.history.push("/Todo");
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <h2 className="main-header">React Tutorial</h2>
                <div>
                    <button className="button-space button" onClick={this.renderAbout}>About me</button>
                    <button className="button" onClick={this.renderTodo}>Todo List</button>
                    <hr/>
                </div>
                <h2>Hey bro, welcome to the homepage!</h2>
                <p>A simple web page showing the basics of react.</p>
                <p>A YouTube tutorial is provided below. Showing the concepts and methods used to create this web page.</p>
                <p>This web page was initially created to help educate my half-brother, who is a web developer in Mexico, on how to utilize react.</p>
                
                <a className="video-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://youtu.be/nRBXw5nf1UU">YouTube Tutorial</a>
            </div>
        );
    }
}

export default HomePage;