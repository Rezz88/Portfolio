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
            "ExpressJS"
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
                <h3 className="main-header">React Tutorial</h3>
                <div>
                    <button className="button-space" onClick={this.renderAbout}>About me</button>
                    <button onClick={this.renderTodo}>Todo List</button>
                    <hr/>
                </div>
                <h2>Hey bro, welcome to the homepage!</h2>
                <p>A simple tutorial showing the basics of react.</p>
                <a className="video-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://youtu.be/nRBXw5nf1UU">YouTube Tutorial</a>
            </div>
        );
    }
}

export default HomePage;