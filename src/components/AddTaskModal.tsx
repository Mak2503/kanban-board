import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./ui/Button";
import Input from "./ui/Input";
import TextArea from "./ui/TextArea";
import { Task, TaskStatus } from "@/types";

type AddTaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

interface TaskAction {
  type: string;
  payload: Task
}

function taskReducer(state: Task, action: TaskAction): Task {
  return {
    ...state,
    ...action.payload
  }
}

const AddTaskModal = ({ isOpen, onClose }: AddTaskModalProps) => {
  const [task, setTask] = useState<Task>({
    id: "",
    title: "",
    description: "",
    status: TaskStatus.TODO,
    subTasks: [
      {
        id: "",
        title: "",
        isCompleted: false,
      },
    ],
  });

  const handleTask = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name !== "subTasks") {
      setTask({ ...task, [name]: value });
    }
  };

  const handleAddSubTask = (e: any) => {
    e.preventDefault();
    const newSubTasks = [
      ...task.subTasks,
      {
        id: "1",
        title: "",
        isCompleted: false,
      },
    ];

    setTask({
      ...task,
      subTasks: newSubTasks,
    });
  };

  const handleRemoveSubTask = (e: any, id: string) => {
    e.preventDefault();
    const newSubTasks = task.subTasks.filter((subTask) => subTask.id !== id);
    setTask({
      ...task,
      subTasks: newSubTasks,
    });
  };

  // console.log(task)

  return (
    <Modal title="Add New Task" isOpen={isOpen} onClose={onClose}>
      <form>
        <div className="mt-4 flex flex-col gap-4">
          <Input
            name="title"
            label="Title"
            onChange={handleTask}
            placeholder="e.g. Take coffee break"
          />
          <TextArea
            name="description"
            label="Description"
            onChange={handleTask}
            placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
          />
          <div>
            <label>Subtasks</label>
            {task.subTasks.map((subTask) => (
              <div key={subTask.id} className="w-full mt-2 flex items-center">
                <Input
                  name="subTasks"
                  type="text"
                  placeholder="e.g. Make coffee"
                  onChange={handleTask}
                />
                <button
                  onClick={(e) => handleRemoveSubTask(e, subTask.id)}
                  className="ml-4 text-4xl text-secondaryText font-normal"
                >
                  &times;
                </button>
              </div>
            ))}
            {/* <div className="w-full mt-2 flex items-center">
              <Input
                name="subTasks"
                type="text"
                placeholder="e.g. Make coffee"
                onChange={handleTask}
              />
              <button className="ml-4 text-4xl text-secondaryText font-normal">
                &times;
              </button>
            </div> */}
            <button
              onClick={handleAddSubTask}
              className="w-full mt-4 p-3 rounded-full bg-primaryText text-primary font-semibold focus:ring-0 focus:outline-none"
            >
              + Add New Subtask
            </button>
          </div>
          <div>
            <label>Status</label>
            {/* TODO: Add custom dropdown */}
            <select
              name="status"
              onChange={handleTask}
              value={TaskStatus.TODO}
              className="w-full mt-4 p-3 rounded-md bg-secondaryBg border-2 border-[#363642] text-primaryText focus:ring-0 focus:outline-none"
            >
              <option value={TaskStatus.TODO}>Todo</option>
              <option value={TaskStatus.DOING}>Doing</option>
              <option value={TaskStatus.DONE}>Done</option>
            </select>
          </div>
          <div className="mt-2 flex gap-4 justify-end">
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Task</Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
