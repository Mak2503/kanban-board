import React from "react";
import Modal from "./Modal";
import { Task } from "@/types";

type TaskModalProps = {
  task: Task;
  onClose: () => void;
};

const TaskModal = ({ task, onClose }: TaskModalProps) => {
  return (
    <Modal isOpen={task} onClose={onClose}>
      <h2 className="text-2xl font-semibold mb-4">{task.title}</h2>
      <p className="text-secondaryText mb-4">{task.description}</p>
      <div>
        <h3>
          Subtasks (
          {task.subTasks.filter((subTask) => subTask.isCompleted).length} of{" "}
          {task.subTasks.length})
        </h3>
        <div className="my-4 flex flex-col gap-4">
          {task.subTasks.map((subTask) => (
            <div
              key={subTask.id}
              className={`p-4 rounded-md bg-primaryBg flex items-center ${
                subTask.isCompleted
                  ? "text-secondaryText line-through"
                  : "text-primaryText"
              }
              `}
            >
              <input
                type="checkbox"
                checked={subTask.isCompleted}
                className="w-5 h-5 accent-primary"
              />
              <span className="ml-4">{subTask.title}</span>
            </div>
          ))}
        </div>
        <h3>Status</h3>
        {/* TODO: Add custom dropdown */}
        <select
          className="w-full mt-4 p-3 rounded-md bg-secondaryBg border-2 border-[#363642] text-primaryText focus:ring-0 focus:outline-none"
          value={task.status}
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </Modal>
  );
};

export default TaskModal;
