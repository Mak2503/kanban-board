"use client";

import Logo from "./Logo";
import kanbanData from "@/constants/data.json";
import BoardIcon from "./BoardIcon";
import { Dispatch, SetStateAction, useState } from "react";
import { Board } from "@/types";
import CreateBoardModal from "./CreateBoardModal";

type SideBarProps = {
  boardList: Board[];
  setBoardList: Dispatch<SetStateAction<Board[]>>;
  board: string;
  setBoard: Dispatch<SetStateAction<string>>;
};

const SideBar = ({
  board,
  setBoard,
  boardList,
  setBoardList,
}: SideBarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="p-8 w-1/4 h-screen bg-secondaryBg border-r-2 border-r-[#363642]">
        <Logo />
        <div className="mt-12">
          <h1 className="text-xs text-secondaryText tracking-widest font-semibold">
            ALL BOARDS ({boardList.length})
          </h1>
          <div className="mt-4">
            {boardList.map((data) => (
              <div
                key={data.id}
                className={`flex items-center cursor-pointer p-3 pl-8 -ml-8 ${
                  board === data.name
                    ? "text-primaryText bg-primary rounded-r-3xl"
                    : "text-secondaryText"
                } font-semibold`}
                onClick={() => setBoard(data.name)}
              >
                {board === data.name ? (
                  <BoardIcon border="#feffff" bg="#645fc6" />
                ) : (
                  <BoardIcon />
                )}
                <span>{data.name}</span>
              </div>
            ))}
            <div
              className={`flex items-center p-3 pl-8 -ml-8 text-primary font-semibold`}
              onClick={() => setIsModalOpen(true)}
            >
              <BoardIcon border="#645fc6" />
              <span>+ Create New Board</span>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <CreateBoardModal
          isOpen={isModalOpen}
          boardList={boardList}
          setBoardList={setBoardList}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default SideBar;
