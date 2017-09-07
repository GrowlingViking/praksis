import React, { Component, PropTypes } from 'react';
import logo from '../logo.svg';
import '../App.css';

class TasksPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            task: { name: "", done: false }
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onNameChange(event) {
        const task = this.state.task;
        task.name = event.target.value;
        this.setState({task: task})
    }

    onClickSave() {
        alert(`Saving ${this.state.task.name}`);
    }

    render() {
        return (
            <div>
                <h1>Tasks</h1>
                <h2>Add task</h2>
                <input
                    type="text"
                    onChange={this.onNameChange}
                    value={this.state.task.name} />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
      );
    }
}

export default TasksPage
