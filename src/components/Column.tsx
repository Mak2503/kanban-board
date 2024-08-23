"use client";

type Props = {
  status: string;
  color: string;
  tasks: {
    id: string;
    title: string;
    description: string;
    subTasks: string[];
    status: string;
  }[];
};

const Column = ({ status, color, tasks }: Props) => {
  return (
    <div>
      <div className="flex items-center">
        <div className={`w-3 h-3 ${color} rounded-full`}></div>
        <span className="tracking-[0.2em] font-semibold ml-3 text-secondaryText text-sm">
          {status} ({tasks.length})
        </span>
      </div>
    </div>
  );
};

export default Column;
