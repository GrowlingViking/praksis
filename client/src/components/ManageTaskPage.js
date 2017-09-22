import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../actions/taskActions';
import '../App.css';

class ManageTaskPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            task: {id: -1, name: "", done: false}
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
        const id = this.props.match.params.id;
        const task = this.props.tasks[id];
        console.log(this.props);
        console.log(this.state);
        console.log(task);

        return (
            <div>
                <h1>Manage Task</h1>
                <input
                    type="text"
                    onChange={this.onNameChange}
                    value={this.state.task.name} />

                <h1> </h1>
                <input
                    type="submit"
                    value="Update"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

ManageTaskPage.PropTypes = {
    tasks: PropTypes.array.isRequired,
    task: PropTypes.object
}

function mapStateToProps(state, ownProps) {
    return{
        tasks: state.tasks,
        task: state.task
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(taskActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTaskPage);
