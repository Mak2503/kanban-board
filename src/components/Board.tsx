"use client";

import { kanbanData } from "@/constants/board";
import { filter } from "lodash";
import Column from "./Column";
import { TaskStatus } from "@/types";

type BoardProps = {
  board: string;
};

const Board = ({ board }: BoardProps) => {
  const kanban = kanbanData.find((data) => data.name === board);

  const todoTasks = filter(
    kanban?.tasks,
    (task) => task.status === TaskStatus.TODO
  );
  const doingTasks = filter(
    kanban?.tasks,
    (task) => task.status === TaskStatus.DOING
  );
  const doneTasks = filter(
    kanban?.tasks,
    (task) => task.status === TaskStatus.DONE
  );

  return (
    <div className="p-8 flex justify-start gap-6">
      <Column status="TODO" color="bg-statusCyan" tasks={todoTasks} />
      <Column status="DOING" color="bg-statusPurple" tasks={doingTasks} />
      <Column status="DONE" color="bg-statusGreen" tasks={doneTasks} />
    </div>
  );
};

export default Board;
