"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={30}
        height={30}
        className="mr-3"
      />
      <h1 className="text-4xl font-bold text-primaryText">kanban</h1>
    </div>
  );
};

export default Logo;
