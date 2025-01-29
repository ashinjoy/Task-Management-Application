import { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ITaskForm } from "../../interface/inferface";
interface IDateProp {
  formInput: ITaskForm;
  setFormInput?: React.Dispatch<React.SetStateAction<ITaskForm>>;
}
export const Datepicker: FC<IDateProp> = ({ formInput, setFormInput }) => {
  return (
    <>
      <DatePicker
      className="w-[55%] md:w-full  p-2 border-2 rounded-lg"
        selected={formInput.dueDate}
        onChange={(date) =>
          setFormInput({ ...formInput, dueDate: date || new Date() })
        }
      />
    </>
  );
};
