import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { batchDeleteTask, batchTaskComplete } from "../../services/tasks/taskActions";
export const BatchUpdate = ({selectedTasks}) => {
    const dispatch = useAppDispatch()
  const handleDelete = () => {
    dispatch(batchDeleteTask(selectedTasks))
  };
  const handleTaskComplete = ()=>{
    dispatch(batchTaskComplete(selectedTasks))
  }
  return (
    <>
      <div className="bg-slate-200 z-50 bottom-3 min-w-[7rem] flex justify-center items-center gap-3">
        <MdDeleteForever onClick={handleDelete} />
        <IoCheckmarkDoneCircle onClick={handleTaskComplete} />
      </div>
    </>
  );
};
