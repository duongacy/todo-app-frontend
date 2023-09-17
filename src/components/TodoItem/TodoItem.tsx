import * as React from 'react';
import { Task } from '../../types/Task';

interface ITodoItemProps extends React.HTMLAttributes<HTMLDivElement> {
    task: Task;
}

const TodoItem: React.FunctionComponent<ITodoItemProps> = ({
    task,
    ...props
}) => {
    return (
        <div
            {...props}
            style={{
                border: '#ccc solid 1px',
                paddingBlock: '12px',
                cursor: 'pointer',
            }}>
            <p>Name: {task.name}</p>
            <p>Description: {task.description}</p>
            <p>Status: {task.isCompleted ? 'Completed' : 'Incompleted'}</p>
        </div>
    );
};

export default TodoItem;
