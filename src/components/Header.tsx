"use client";

import Image from "next/image";

const Header = ({ board }: { board: string }) => {
  return (
    <div className="px-8 py-6 bg-secondaryBg border-b-2 border-b-[#363642] flex items-center justify-between">
      <h1 className="text-2xl text-primaryText font-bold">{board}</h1>
      <div className="flex items-center">
        <button className="px-6 py-4 bg-primary text-primaryText rounded-full font-semibold mr-8">
          + Add New Task
        </button>
        <div>
          <Image src="/menu.svg" alt="menu" width={4} height={4} />
        </div>
      </div>
    </div>
  );
};

export default Header;
