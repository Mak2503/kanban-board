"use client";

import { Task } from "@/types";
import TaskCard from "./TaskCard";
import { useState } from "react";
import Modal from "./Modal";
import TaskModal from "./TaskModal";

type ColumnProps = {
  status: string;
  color: string;
  tasks: Task[];
};

const Column = ({ status, color, tasks }: ColumnProps) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const openModal = (task: Task) => setSelectedTask(task);
  const closeModal = () => setSelectedTask(null);
  return (
    <>
      <div className="w-full">
        <div className="flex items-center">
          <div className={`w-3 h-3 ${color} rounded-full`}></div>
          <span className="tracking-[0.2em] font-semibold ml-3 text-secondaryText text-sm">
            {status} ({tasks.length})
          </span>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          {tasks.map((task) => (
            <div key={task.id} onClick={() => openModal(task)}>
              <TaskCard task={task} />
            </div>
          ))}
        </div>
      </div>
      {/* If the modal is open, render the Modal component */}
      {selectedTask && <TaskModal task={selectedTask!} onClose={closeModal} />}
    </>
    // <div className="mt-6 flex flex-col gap-6">
    //   <div className="py-8 text-center bg-[#23232f] text-secondaryText font-bold rounded-md">
    //     + Add Task
    //   </div>
    // </div>
  );
};

export default Column;
