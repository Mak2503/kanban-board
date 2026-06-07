export enum TaskStatus {
  TODO = "todo",
  DOING = "doing",
  DONE = "done"
}

export type Board = {
  id: string;
  name: string;
  tasks: Task[];
}

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  subTasks: Subtask[];
};

export type Subtask = {
  id: string;
  title: string;
  isCompleted: boolean;
};
