export type Task = {
    id: number;
    name: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
}

export type CreateTaskType = Omit<Task, 'id'>;
export type UpdateTaskType = Partial<Omit<Task, 'id'>> & Pick<Task, 'id'>;