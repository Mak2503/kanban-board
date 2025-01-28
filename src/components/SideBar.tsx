"use client";

import Logo from "./Logo";
import BoardIcon from "./BoardIcon";
import { Dispatch, SetStateAction, useState } from "react";
import { Board } from "@/types";
import { CgCollage } from "react-icons/cg";
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
                <CgCollage className="h-5 w-5" />
                <span className="ml-2">{data.name}</span>
              </div>
            ))}
            <div
              className={`flex items-center cursor-pointer p-3 pl-8 -ml-8 text-primary font-semibold`}
              onClick={() => setIsModalOpen(true)}
            >
              <CgCollage className="h-5 w-5" />
              <span className="ml-2">+ Create New Board</span>
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
