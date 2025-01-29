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
    <div className="bg-black bg-opacity-50 p-1 fixed inset-0  min-w-full  flex md:flex-col md:justify-center md:items-center  justify-center items-end">
      <div className="flex flex-col w-full md:w-1/2 md:h-[86%] bg-white rounded-lg p-2 justify-between  gap-3">
        <div className="flex justify-between p-4  items-center border-b-2  border-slate-200">
          <h1 className="font-semibold text-xl">Create Task</h1>
          <IoClose onClick={handleClick} className="hover:cursor-pointer"/>
        </div>
      <Form />  
      </div>
    </div>,
    document.getElementById("modal")!
  );
};
