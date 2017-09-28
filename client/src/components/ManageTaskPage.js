import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../actions/taskActions';
import '../App.css';

var id = -1;

class ManageTaskPage extends Component {
    constructor(props, context) {
        super(props, context);

        id = this.props.match.params.id;

        this.state = {
            task: this.props.tasks[id]
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onNameChange(event) {
        const task = this.state.task;
        task.name = event.target.value;
        this.setState({task: task})
    }

    onClickSave() {
        this.props.actions.editTask(this.state.task);
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
    actions: PropTypes.object
}

function mapStateToProps(state, ownProps) {
    return{
        tasks: state.tasks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(taskActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTaskPage);
