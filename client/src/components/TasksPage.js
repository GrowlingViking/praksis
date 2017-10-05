import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { createTask } from '../actions/taskActions';

class TasksPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            newTaskName: ""
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onNameChange(event) {
        var name = this.state.newTaskName;
        name = event.target.value;
        this.setState({newTaskName: name});
    }

    onClickSave() {
        this.props.create(this.state.newTaskName);
        window.location.reload();
    }

    render() {
        const {tasks} = this.props;

        return (
            <div>
                <h2>Tasks</h2>
                <table className="table">
                    <tbody>
                    {tasks.map(task =>
                        <tr key={task.id}>
                            <td><NavLink to={"/task/" + task.id}>{task.name}</NavLink></td>
                            <td>{task.done}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <input
                    type="text"
                    onChange={this.onNameChange} />
                <input
                    type="submit"
                    value="Create new task"
                    onClick={this.onClickSave} />
            </div>
      );
    }
}

TasksPage.propTypes = {
    tasks: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        tasks: state.tasks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        create: (name) => dispatch(createTask(name))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
