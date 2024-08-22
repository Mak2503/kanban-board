"use client";

import SideBar from "@/components/SideBar";
import { useState } from "react";
import kanbanData from "@/constants/data.json";

export default function Home() {
  const [board, setBoard] = useState<string>(kanbanData.data[0].name);
  return (
    <main className="bg-primaryBg">
      <SideBar board={board} setBoard={setBoard} />
    </main>
  );
}
