"use client";

import Logo from "./Logo";
import kanbanData from "@/constants/data.json";
import BoardIcon from "./BoardIcon";

const SideBar = () => {
  return (
    <div className="p-8 w-1/4 h-screen bg-secondaryBg border-r border-r-[#363642]">
      <Logo />
      <div className="mt-12">
        <h1 className="text-xs text-secondaryText tracking-widest font-semibold">
          ALL BOARDS ({kanbanData.data.length})
        </h1>
        {/* TODO: Implement board selection functionality */}
        <div className="mt-4">
          {kanbanData.data.map((data, index) => (
            <div
              key={data.id}
              className={`flex items-center p-3 pl-8 -ml-8 first:text-primaryText font-semibold text-secondaryText first:bg-primary first:rounded-r-3xl`}
            >
              {index === 0 ? (
                <BoardIcon border="#feffff" bg="#645fc6" />
              ) : (
                <BoardIcon />
              )}
              <span>{data.name}</span>
            </div>
          ))}
          <div
            className={`flex items-center p-3 pl-8 -ml-8 text-primary font-semibold`}
          >
            <BoardIcon border="#645fc6" />
            <span>+ Create New Board</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
