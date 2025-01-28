import React from "react";
import Modal from "./Modal";
import Button from "./ui/Button";
import Input from "./ui/Input";
import TextArea from "./ui/TextArea";

type AddTaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddTaskModal = ({ isOpen, onClose }: AddTaskModalProps) => {
  return (
    <Modal title="Add New Task" isOpen={isOpen} onClose={onClose}>
      <div className="mt-4 flex flex-col gap-4">
        <Input label="Title" placeholder="e.g. Take coffee break" />
        <TextArea
          label="Description"
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
        />
        <div>
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
        <div>
          <label>Status</label>
          {/* TODO: Add custom dropdown */}
          <select className="w-full mt-4 p-3 rounded-md bg-secondaryBg border-2 border-[#363642] text-primaryText focus:ring-0 focus:outline-none">
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="mt-2 flex gap-4 justify-end">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button>Add Task</Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddTaskModal;
