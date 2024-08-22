"use client";

import Logo from "./Logo";
import kanbanData from "@/constants/data.json";

const SideBar = () => {
  return (
    <div className="p-8 w-1/4 h-screen bg-secondaryBg border-r border-r-[#363642]">
      <Logo />
      <div className="mt-12">
        <h1
          className="text-xs text-secondaryText"
          style={{ letterSpacing: "3px" }}
        >
          ALL BOARDS ({kanbanData.data.length})
        </h1>
        {/* 
          TODO: 
          1. Add Board Icon
          2. Implement board selection functionality
        */}
        <div className="mt-4 text-sm">
          {kanbanData.data.map((data) => (
            <div
              key={data.id}
              className={`p-3 pl-8 -ml-8 first:text-primaryText text-secondaryText first:bg-primary first:rounded-r-3xl`}
            >
              {data.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
