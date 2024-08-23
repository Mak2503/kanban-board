"use client";

import kanbanData from "@/constants/data.json";
import { uniqBy, groupBy, filter } from "lodash";
import Column from "./Column";

type Props = {
  board: string;
};

const Board = ({ board }: Props) => {
  const kanban = kanbanData.data.find((data) => data.name === board);

  const todoTasks = filter(kanban?.tasks, (task) => task.status === "TODO");
  const doingTasks = filter(kanban?.tasks, (task) => task.status === "DOING");
  const doneTasks = filter(kanban?.tasks, (task) => task.status === "DONE");

  return (
    <div className="p-8 flex justify-start gap-6">
      <Column status="TODO" color="bg-statusCyan" tasks={todoTasks} />
      <Column status="DOING" color="bg-statusPurple" tasks={doingTasks} />
      <Column status="DONE" color="bg-statusGreen" tasks={doneTasks} />
    </div>
  );
};

export default Board;
