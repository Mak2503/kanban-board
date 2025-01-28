"use client";

import SideBar from "@/components/SideBar";
import { useState } from "react";
import { kanbanData } from "@/constants/board";
import Header from "@/components/Header";
import Board from "@/components/Board";

export default function Home() {
  const [boardList, setBoardList] = useState(kanbanData);
  const [board, setBoard] = useState<string>(kanbanData[0].name);
  return (
    <main className="bg-primaryBg flex">
      <SideBar
        board={board}
        boardList={boardList}
        setBoardList={setBoardList}
        setBoard={setBoard}
      />
      <div className="w-4/5">
        <Header board={board} />
        <Board board={board} />
      </div>
    </main>
  );
}
