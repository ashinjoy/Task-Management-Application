import { FC } from "react";
interface ISelectBox {
  formInput: ITaskForm;
  setFormInput?: React.Dispatch<React.SetStateAction<ITaskForm>>;
}
const status = ["TO-DO", "IN-PROGRESS", "COMPLETED"];
export const SelectBox: FC<ISelectBox> = ({ formInput, setFormInput }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormInput((prev) => {
      return { ...prev, taskStatus: e.target.value };
    });
  };
  return (
    <>
      <select
        name=""
        id=""
        className="w-[55%] md:w-[80%] p-2 border-2 rounded-lg "
        onChange={handleChange}
      >
        {status &&
          status.length > 0 &&
          status.map((taskStatus, index) => {
            return (
              <option value={taskStatus} key={index}>
                {taskStatus}
              </option>
            );
          })}
      </select>
    </>
  );
};
