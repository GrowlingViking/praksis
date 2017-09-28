import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import '../App.css';
import * as taskActions from '../actions/taskActions';

class TasksPage extends Component {

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
                <form action="/task/">
                    <input type="submit" value="Create new task" />
                </form>
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
        actions: bindActionCreators(taskActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
