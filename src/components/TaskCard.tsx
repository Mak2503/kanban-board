"use client";

import { Task } from "@/types";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  const { title, subTasks } = task;

  return (
    <div className="px-6 py-6 bg-secondaryBg rounded-md">
      <h2 className="text-primaryText">{title}</h2>
      <p className="text-secondaryText text-sm">
        {subTasks.filter((subTask) => subTask.isCompleted).length} of{" "}
        {subTasks.length} tasks
      </p>
    </div>
  );
};

export default TaskCard;
