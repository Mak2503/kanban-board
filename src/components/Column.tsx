"use client";

import { Task } from "@/types";
import TaskCard from "./TaskCard";

type Props = {
  status: string;
  color: string;
  tasks: Task[];
};

const Column = ({ status, color, tasks }: Props) => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className={`w-3 h-3 ${color} rounded-full`}></div>
        <span className="tracking-[0.2em] font-semibold ml-3 text-secondaryText text-sm">
          {status} ({tasks.length})
        </span>
      </div>
      <div className="mt-6 flex flex-col gap-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
    // <div className="mt-6 flex flex-col gap-6">
    //   <div className="py-8 text-center bg-[#23232f] text-secondaryText font-bold rounded-md">
    //     + Add Task
    //   </div>
    // </div>
  );
};

export default Column;
