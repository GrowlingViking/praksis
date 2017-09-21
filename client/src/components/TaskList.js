import React, {PropTypes} from 'react';

const TaskList = ({tasks}) => {
    return (
        <table className="table">
            <tbody>
            {tasks.map(task =>
                <tr>
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                    <td>{task.done}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default TaskList;
