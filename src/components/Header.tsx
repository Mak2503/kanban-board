"use client";

import Image from "next/image";
import { useState } from "react";
import AddTaskModal from "./AddTaskModal";

const Header = ({ board }: { board: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="px-8 py-6 bg-secondaryBg border-b-2 border-b-[#363642] flex items-center justify-between">
        <h1 className="text-2xl text-primaryText font-bold">{board}</h1>
        <div className="flex items-center">
          <button
            className="px-6 py-4 bg-primary text-primaryText rounded-full font-semibold mr-8"
            onClick={openModal}
          >
            + Add New Task
          </button>
          <div>
            <Image src="/menu.svg" alt="menu" width={4} height={4} />
          </div>
        </div>
      </div>
      <AddTaskModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;
