"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={20}
        height={20}
        className="mr-3"
      />
      <h1 className="text-2xl font-bold text-primaryText">kanban</h1>
    </div>
  );
};

export default Logo;
