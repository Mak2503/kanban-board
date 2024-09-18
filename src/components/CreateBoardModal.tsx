import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "./Modal";
import { Board } from "@/types";

type CreateBoardModalProps = {
  isOpen: boolean;
  boardList: Board[];
  setBoardList: Dispatch<SetStateAction<Board[]>>;
  onClose: () => void;
};

const CreateBoardModal = ({
  isOpen,
  onClose,
  boardList,
  setBoardList,
}: CreateBoardModalProps) => {
  const [title, setTitle] = useState<string>("");
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-semibold mb-4">Create Board</h2>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Web Design"
          className="w-full mt-2 p-3 rounded-md bg-secondaryBg border-2 border-[#363642] text-primaryText focus:ring-0 focus:outline-none"
        />
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 border border-primary text-primary rounded-md font-semibold mr-4"
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-primary text-primaryText rounded-md font-semibold"
          onClick={() => {
            setBoardList([
              ...boardList,
              {
                id: `${boardList.length + 1}`,
                name: title,
                tasks: [],
              },
            ]);
            onClose();
          }}
        >
          Create
        </button>
      </div>
    </Modal>
  );
};

export default CreateBoardModal;
