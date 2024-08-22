"use client";

import Logo from "./Logo";

const SideBar = () => {
  return (
    <div className="p-8 w-1/4 h-screen bg-secondaryBg border-r border-r-[#363642]">
      <Logo />
      <div className="mt-12">
        <h1
          className="text-xs text-secondaryText"
          style={{ letterSpacing: "3px" }}
        >
          ALL BOARDS (3)
        </h1>
        {/* 
          TODO: 
          1. Show boards from json data 
          2. Add Board Icon
          3. Implement board selection functionality
        */}
        <div className="mt-4 text-sm">
          <div className="p-3 pl-8 -ml-8 text-primaryText bg-primary rounded-r-3xl">
            Platform Launch
          </div>
          <div className="p-3 pl-8 -ml-8 text-secondaryText">
            Marketing Plan
          </div>
          <div className="p-3 pl-8 -ml-8 text-secondaryText">Roadmap</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
