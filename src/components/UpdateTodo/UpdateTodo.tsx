import * as React from 'react';
import {Task} from '../../types/Task';
import {tasks} from '../TodoList/TodoList';

export interface IUpdateTodoProps
    extends React.DialogHTMLAttributes<HTMLDialogElement> {
    task?: Task;
    setTask?: (task: Task) => void;
    setOpen?: (isOpen: boolean) => void;
    onSubmitCustom?: () => void;
}

const UpdateTodo: React.FC<IUpdateTodoProps> = ({
    task,
    setTask,
    setOpen,
    onSubmitCustom,
    ...props
}) => {
    const handleChangeTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setTask?.({...task!, [name]: value});
    };

    const handleChangeCheckbox = () => {
        setTask?.({...task!, isCompleted: !task?.isCompleted});
    };

    const handleSubmit = () => {
        setOpen?.(false);
        const index = tasks.findIndex((item) => item.id === task?.id);
        tasks[index] = task!;
    };
    return (
        <dialog
            {...props}
            style={{
                position: 'absolute',
                inset: 0,
            }}>
            {task && (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>
                    <input
                        type='text'
                        value={task.name}
                        name='name'
                        onChange={handleChangeTextInput}
                    />
                    <input
                        type='text'
                        value={task.description}
                        name='description'
                        onChange={handleChangeTextInput}
                    />
                    <input
                        type='date'
                        value={task.dueDate}
                        name='dueDate'
                        onChange={handleChangeTextInput}
                    />
                    <input
                        type='checkbox'
                        value={task.isCompleted.toString()}
                        onChange={handleChangeCheckbox}
                        checked={task.isCompleted}
                    />
                    <button type='submit'>Submit</button>
                </form>
            )}
            <button onClick={() => setOpen?.(false)}>Cancel</button>
        </dialog>
    );
};

export default UpdateTodo;
