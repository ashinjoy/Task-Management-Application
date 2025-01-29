import { FC, useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Button } from "../../components/button/Button";
import { TaskLists } from "../../components/taskList/TaskLists";
import { Search } from "../../components/search/Search";
import { TaskModal } from "../../components/modal/TaskModal";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getTasks } from "../../services/tasks/taskActions";
import { Menu } from "../../components/menu/Menu";
import { resetMessage } from "../../services/tasks/taskSlice";

export const TaskList: FC = () => {
  const { tasks } = useAppSelector((state) => state.task);
  const [todos, setTodos] = useState([]);
  const [inProgess, setInProgess] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [catMenu, setCatMenu] = useState<boolean>(false);
  const [taskModal, setTaskModal] = useState<boolean>(false);
  const { message } = useAppSelector((state) => state.task);
  const { userData } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTasks(userData?.uid));
  }, []);

  useEffect(() => {
    if (
      message === "Selected Tasks Deleted" ||
      message === "Selected Tasks Completed"
    ) {
      dispatch(getTasks(userData?.uid));
      dispatch(resetMessage());
    }
  }, [message]);
  useEffect(() => {
    if (message === "Task Created SuccessFully") {
      dispatch(resetMessage());
    }
    const todoFilter = tasks.filter((task) => task.taskStatus === "TO-DO");
    const inProgessFilter = tasks.filter(
      (task) => task.taskStatus === "IN-PROGRESS"
    );
    const completeFilter = tasks.filter(
      (task) => task.taskStatus === "COMPLETED"
    );

    setTodos(todoFilter);
    setInProgess(inProgessFilter);
    setCompleted(completeFilter);
  }, [tasks, message]);

  return (
    <>
      <Navbar />
      {taskModal && <TaskModal setState={setTaskModal} state={taskModal} />}
      <div className="flex flex-col gap-y-4 md:gap-y-4  p-2 justify-center ">
        <div className="flex flex-col md:flex-row md:hidden">
          <div className="mt-[4rem] flex justify-end">
            <Button
              text="Add Task"
              icon={false}
              color="#7B1984"
              textColor="white"
              setState={setTaskModal}
              state={taskModal}
            />
          </div>
          <div className="flex flex-col gap-3 p-2 ">
            <span className="font-semibold text-xs ">Filter by:</span>
            <div className="flex min-w-full space-x-6 ">
              <Button
                text="Category"
                icon={true}
                color="#FFFFFF"
                setState={setCatMenu}
              />
              <Button
                text="Due Date"
                icon={true}
                color="#FFFFFF"
                setState={setCatMenu}
              />
              {catMenu && <Menu items={["WORK", "PERSONAL"]} />}
            </div>
            <div className="w-full border-2 p-[.5rem] rounded-full">
              <Search />
            </div>
          </div>
        </div>
        <div className="hidden mt-[7rem] md:flex justify-between p-2">
          <div className="flex gap-2">
            <span>Filter by:</span>
            <Button
              text="Category"
              icon={true}
              color="#FFFFFF"
              setState={setCatMenu}
              state={catMenu}
            />
            <Button
              text="Due Date"
              icon={true}
              color="#FFFFFF"
              setState={setCatMenu}
              state={catMenu}
            />
            {catMenu && <Menu items={["Work", "Personal"]} />}
          </div>
          <div className="flex justify-between w-[30%]">
            <div className="w-2/3 border-2 p-[.5rem] rounded-full">
              <Search />
            </div>
            <Button
              text="Add Task"
              color="#FFFFFF"
              setState={setTaskModal}
              state={taskModal}
            />
          </div>
        </div>

        {todos && todos.length > 0 && (
          <TaskLists
            headingColor="bg-[#FAC3FF]"
            heading="Todo"
            tasksList={todos}
          />
        )}
        {inProgess && inProgess.length > 0 && (
          <TaskLists
            headingColor="bg-[#85D9F1]"
            heading="In-Progress"
            tasksList={inProgess}
          />
        )}
        {completed && completed.length > 0 && (
          <TaskLists
            headingColor="bg-[#CEFFCC]"
            heading="Completed"
            tasksList={completed}
          />
        )}
      </div>
    </>
  );
};
