import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../logo.svg';
import '../App.css';
import * as taskActions from '../actions/taskActions';

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
        this.props.actions.createTask(this.state.task);
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
                    value="Add"
                    onClick={this.onClickSave} />
            </div>
      );
    }
}

TasksPage.propTypes = {
    tasks: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        tasks: state.tasks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(taskActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
