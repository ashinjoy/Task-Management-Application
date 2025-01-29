import { FC, useEffect, useState } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { MdDragIndicator } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BatchUpdate } from "../menu/BatchUpdateMeny";

interface ITableProps {
  headingColor: string;
  heading: string;
  tasksList?: any[];
}
export const TaskLists: FC<ITableProps> = ({
  headingColor,
  heading,
  tasksList,
}) => {
  const [tasks, setTasks] = useState(tasksList);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const handleOnDragEnd = (result) => {
    if (tasks) {
      const items = Array.from(tasks);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setTasks(items);
    }
    return;
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let taskSelected;
    if (
      selectedTasks.length > 0 &&
      selectedTasks.some((element) => element === e.target.value)
    ) {
      taskSelected = [...selectedTasks].filter(
        (element) => element !== e.target.value
      );
    } else {
      taskSelected = [...selectedTasks, e.target.value];
    }
    setSelectedTasks(taskSelected);
  };
  useEffect(() => {
    setTasks(tasksList);
  }, [tasksList]);
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="bg-[#F1F1F1] rounded-md">
          <div className={`${headingColor} rounded-md `}>
            <div className="flex justify-between items-center p-2">
              <span className="font-semibold text-base">{heading}(3)</span>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9999 12.7496C17.6159 12.7496 17.2319 12.8966 16.9394 13.1891L10.9394 19.1891C10.3529 19.7756 10.3529 20.7236 10.9394 21.3101C11.5259 21.8966 12.4739 21.8966 13.0604 21.3101L18.0179 16.3526L22.9574 21.1226C23.5559 21.6971 24.5024 21.6806 25.0784 21.0851C25.6544 20.4896 25.6379 19.5386 25.0424 18.9641L19.0424 13.1711C18.7499 12.8891 18.3749 12.7496 17.9999 12.7496"
                  fill="#0D7A0A"
                />
                <mask
                  id="mask0_2048_3111"
                  maskUnits="userSpaceOnUse"
                  x="10"
                  y="12"
                  width="16"
                  height="10"
                >
                  <path
                    d="M17.9999 12.7496C17.6159 12.7496 17.2319 12.8966 16.9394 13.1891L10.9394 19.1891C10.3529 19.7756 10.3529 20.7236 10.9394 21.3101C11.5259 21.8966 12.4739 21.8966 13.0604 21.3101L18.0179 16.3526L22.9574 21.1226C23.5559 21.6971 24.5024 21.6806 25.0784 21.0851C25.6544 20.4896 25.6379 19.5386 25.0424 18.9641L19.0424 13.1711C18.7499 12.8891 18.3749 12.7496 17.9999 12.7496"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_2048_3111)">
                  <rect
                    width="36"
                    height="36"
                    transform="matrix(1 0 0 -1 0 36)"
                    fill="#3E0344"
                  />
                </g>
              </svg>
            </div>
          </div>
          <table className="min-w-full">
            <Droppable droppableId="tasklist">
              {(provided) => (
                <tbody
                  className="tasklist"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {tasks.length > 0 &&
                    tasks.map((task, index) => {
                      return (
                        <Draggable
                          key={task.id}
                          draggableId={task?.id}
                          index={index}
                        >
                          {(provided) => {
                            return (
                              <tr
                                className=" flex space-x-2 p-3 items-center border-b-2 stroke-black"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <td className="">
                                  <input
                                    type="checkbox"
                                    onChange={handleChange}
                                    value={task.id}
                                  />
                                </td>
                                <td className="hidden md:block">
                                  <MdDragIndicator />
                                </td>
                                <td>
                                  <GoCheckCircleFill className="text-[#A7A7A7]" />
                                </td>
                                <td>
                                  <span>{task.title}</span>
                                </td>
                              </tr>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                  {provided.placeholder}
                </tbody>
              )}
            </Droppable>
          </table>
          {selectedTasks.length > 0 && (
            <BatchUpdate selectedTasks={selectedTasks} />
          )}
        </div>
      </DragDropContext>
    </>
  );
};
