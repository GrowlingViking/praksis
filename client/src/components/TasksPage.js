import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';
import * as taskActions from '../actions/taskActions';
import TaskList from './TaskList';

class TasksPage extends Component {
    constructor(props, context) {
        super(props, context);

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
        const {tasks} = this.props;

        return (
            <div>
                <h2>Tasks</h2>
                <TaskList tasks={tasks} />
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
