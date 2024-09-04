import React from "react";
import Modal from "./Modal";

type AddTaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddTaskModal = ({ isOpen, onClose }: AddTaskModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
      <div>
        <label>Title</label>
        <input
          type="text"
          placeholder="e.g. Take coffee break"
          className="w-full mt-2 p-3 rounded-md bg-secondaryBg border-2 border-[#363642] text-primaryText focus:ring-0 focus:outline-none"
        />
      </div>
      <div className="mt-4">
        <label>Description</label>
        <textarea
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
          className="w-full mt-2 p-3 rounded-md bg-secondaryBg border-2 border-[#363642] text-primaryText focus:ring-0 focus:outline-none"
        />
      </div>
      <div className="mt-4">
        <label>Subtasks</label>
        <div className="w-full mt-2 flex items-center">
          <input
            type="text"
            placeholder="e.g. Make coffee"
            className="w-full p-3 rounded-md bg-secondaryBg border-2 border-[#363642] text-primaryText focus:ring-0 focus:outline-none"
          />
          <button className="ml-4 text-4xl text-secondaryText font-normal">
            &times;
          </button>
        </div>
        <button className="w-full mt-4 p-3 rounded-full bg-primaryText text-primary font-semibold focus:ring-0 focus:outline-none">
          + Add New Subtask
        </button>
      </div>
      <div className="mt-4">
        <label>Status</label>
        {/* TODO: Add custom dropdown */}
        <select
          className="w-full mt-4 p-3 rounded-md bg-secondaryBg border-2 border-[#363642] text-primaryText focus:ring-0 focus:outline-none"
          value={"todo"}
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </Modal>
  );
};

export default AddTaskModal;
