import { createPortal } from "react-dom";
import { Form } from "../form/Form";
import { IoClose } from "react-icons/io5";
interface ITaskModal {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  state:boolean
}
export const TaskModal = ({setState,state}) => {
  const handleClick = () => {
    setState(!state)
  };
  return createPortal(
    <div className="z-50  p-1 fixed inset-0 bg-slate-200 min-w-full flex  justify-center items-end">
      <div className="flex flex-col min-w-full  bg-white rounded-lg p-2 gap-3">
        <div className="flex justify-between p-2  items-center border-b-2  border-slate-200">
          <h1 className="font-semibold text-xl">Create Task</h1>
          <IoClose onClick={handleClick} />
        </div>
        <Form />
      </div>
    </div>,
    document.getElementById("modal")!
  );
};
