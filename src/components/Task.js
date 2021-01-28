import React from 'react';

const Task = ({ task, ...props }) => {
    const ActionBtn = () => (
        <div className="action-btn">
            {!task.done ? (
                <span className='done-btn' aria-label="done" role="img" onClick={props.doneTask}>
          done️
        </span>
            ) : (
                <span className='delete-btn' aria-label="delete" role="img" onClick={props.deleteTask}>
          delete
        </span>
            )}
        </div>
    );


    return (
        <div className='task'>
            <p>{task.title}</p>
            <ActionBtn/>
        </div>
    );
};

export default Task;
