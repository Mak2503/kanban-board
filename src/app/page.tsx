"use client";

import SideBar from "@/components/SideBar";
import { useState } from "react";
import kanbanData from "@/constants/data.json";
import Header from "@/components/Header";
import Board from "@/components/Board";

export default function Home() {
  const [board, setBoard] = useState<string>(kanbanData.data[0].name);
  return (
    <main className="bg-primaryBg flex">
      <SideBar board={board} setBoard={setBoard} />
      <div className="w-4/5">
        <Header board={board} />
        <Board board={board} />
      </div>
    </main>
  );
}
