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
        this.setState({ list: this.state.list.concat(this.input.value) })
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
                <h3 className="main-header">React Tutorial</h3>
                <div>
                    <button onClick={this.returnHome}>Home</button>
                    <hr/>
                </div>
                <h2>Todo List</h2>
                <input type="text" placeholder="Add item..." ref={r => this.input = r}></input>
                <button onClick={this.add}>Add</button>
                <button onClick={this.remove}>Delete list</button>
                {this.state.list.map(x => <li>{x}</li>)}
            </div>
            
        )
    }
}

    

export default TodoPage;