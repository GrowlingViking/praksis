import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { editTask } from '../actions/taskActions';
import '../App.css';

class ManageTaskPage extends Component {
    constructor(props, context) {
        super(props, context);

        var task = this.props.tasks[this.props.match.params.id];

        this.state = {
            task: task
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onDoneChange = this.onDoneChange.bind(this);
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

    onClickSave() {
        this.props.updateTask(this.state.task);
    }

    render() {
        console.log(this.props);
        console.log(this.state);

        return (
            <div>
                <h1>Manage Task</h1>
                <input
                    type="text"
                    onChange={this.onNameChange}
                    value={this.state.task.name} />
                <p>
                <input
                    type="submit"
                    value="Toggle done"
                    onClick={this.onDoneChange} />
                </p>
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
        updateTask: (task) => dispatch(editTask(task))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTaskPage);
