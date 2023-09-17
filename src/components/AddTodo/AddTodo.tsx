import * as React from 'react';
import {CreateTaskType} from '../../types/Task';

interface IAddTodoProps {}

export const DEFAULT_TASK: CreateTaskType = {
    name: '',
    description: '',
    dueDate: '',
    isCompleted: false,
};

const AddTodo: React.FunctionComponent<IAddTodoProps> = () => {
    const [task, setTask] = React.useState<CreateTaskType>(DEFAULT_TASK);

    const handleChangeIsCompleted = () => {
        setTask((prev) => ({...prev, isCompleted: !prev.isCompleted}));
    };

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setTask((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({task});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={task.name}
                name='name'
                onChange={handleChangeText}
            />
            <input
                type='text'
                value={task.description}
                name='description'
                onChange={handleChangeText}
            />
            <input
                type='date'
                value={task.dueDate}
                name='dueDate'
                onChange={handleChangeText}
            />
            <input
                type='checkbox'
                value={task.isCompleted.toString()}
                onChange={handleChangeIsCompleted}
                checked={task.isCompleted}
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default AddTodo;
