import React, { Component } from "react";

class TodoPage extends Component {
    constructor() {
        super();
        this.state = { list: [] };
    }

    add = () => {
        if (this.input.value === "") {
            return null;
        }
        this.setState({ list: this.state.list.concat(this.input.value) });
        localStorage.setItem("List - Data", this.state.list);
        this.input.value = null;
    }

    remove = () => {
        this.setState({ list: [] });
        this.input.value = null;
    }

    returnHome = () => {
        this.props.history.push("/");
    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <h2 className="main-header">React Tutorial</h2>
                <div>
                    <button className="button" onClick={this.returnHome}>Home</button>
                    <hr/>
                </div>
                <h2>Todo List</h2>
                <input className="button-space" type="text" placeholder="Add item..." ref={r => this.input = r}></input>
                <button className="button button-space" onClick={this.add}>Add</button>
                <button className="button" onClick={this.remove}>Delete list</button>
                {this.state.list.map(x => <li>{x}</li>)}
            </div>
        )
    }
}

    

export default TodoPage;