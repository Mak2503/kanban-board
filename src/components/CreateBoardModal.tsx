import React, { Dispatch, FormEvent, SetStateAction } from "react";
import Modal from "./Modal";
import { Board } from "@/types";
import Input from "./ui/Input";
import Button from "./ui/Button";

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
  const handleNewBoard = (e: FormEvent) => {
    // e.stopPropagation();
    const form = e.target as HTMLFormElement
    const title = new FormData(form).get("title")?.toString() as string;
    setBoardList([
      ...boardList,
      {
        id: `${boardList.length + 1}`,
        name: title,
        tasks: [],
      },
    ]);
    onClose();
  };

  return (
    <Modal title="Create Board" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleNewBoard}>
        <Input
          label="Title"
          name="title"
          placeholder="e.g. Web Design"
        />
        <div className="mt-6 flex gap-4 justify-end">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateBoardModal;
