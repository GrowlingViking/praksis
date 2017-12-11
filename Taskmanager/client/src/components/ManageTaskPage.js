import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { editTask, removeTask } from '../actions/taskActions';
import '../App.css';

class ManageTaskPage extends Component {
    constructor(props, context) {
        super(props, context);

        var task = {id: -1, name: "", done: false };
        var targetId = this.props.match.params.id;
        this.props.tasks.forEach(function (footask) {
            if (footask.id == targetId) {
                task = footask;
            }
        })

        this.state = {
            task: task
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onDoneChange = this.onDoneChange.bind(this);
        this.onClickRemove = this.onClickRemove.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onNameChange(event) {
        const task = this.state.task;
        task.name = event.target.value;
        this.setState({task: task});
    }

    onDoneChange() {
        const task = this.state.task;
        if(task.done) {
            task.done = 0;
        } else {
            task.done = 1;
        }
        this.setState({task: task});
    }

    onClickRemove() {
        this.props.remove(this.state.task);
        window.location.href = "/";
    }

    onClickSave() {
        this.props.updateTask(this.state.task);
        window.location.href = "/";
    }

    render() {

        return (
            <div>
                <h1>Manage Task</h1>
                <input
                    type="text"
                    onChange={this.onNameChange}
                    value={this.state.task.name} />
                <p> Done: {this.state.task.done} </p>
                <input
                    type="submit"
                    value="Toggle done"
                    onClick={this.onDoneChange} />
                <p></p>
                <input
                    type="submit"
                    value="Remove task"
                    onClick={this.onClickRemove} />
                <p></p>
                <input
                    type="submit"
                    value="Update"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

ManageTaskPage.PropTypes = {
    tasks: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return{
        tasks: state.tasks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateTask: (task) => dispatch(editTask(task)),
        remove: (task) => dispatch(removeTask(task))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTaskPage);
