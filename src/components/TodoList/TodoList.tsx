import * as React from 'react';
import {Task} from '../../types/Task';
import TodoItem from '../TodoItem/TodoItem';
import UpdateTodo from '../UpdateTodo/UpdateTodo';

interface ITodoListProps {}

export const tasks: Task[] = [1, 2, 3].map((num) => ({
    id: num,
    name: 'Name' + num,
    description: 'description' + num,
    dueDate: 'dueDate' + num,
    isCompleted: false,
}));

const TodoList: React.FunctionComponent<ITodoListProps> = () => {
    const [taskSelected, setTaskSelected] = React.useState<Task>();
    const [openModal, setOpenModal] = React.useState(false);

    const showEditModal = (task: Task) => {
        setTaskSelected(task);
        setOpenModal(true);
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBlock: '24px',
                }}>
                {tasks.map((item) => (
                    <TodoItem
                        task={item}
                        key={item.id}
                        onClick={() => showEditModal(item)}
                    />
                ))}
            </div>
            <UpdateTodo
                open={openModal}
                setOpen={setOpenModal}
                setTask={setTaskSelected}
                task={taskSelected}
            />
        </>
    );
};

export default TodoList;
