export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  subTasks: Subtask[];
};

export type Subtask = {
  id: string;
  title: string;
  isCompleted: boolean;
};
