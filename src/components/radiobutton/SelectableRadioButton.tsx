import React, { FC, useState } from "react";
import { ITaskForm } from "../../interface/inferface";

interface IRadioBtn {
  name: string;
  formInput?: ITaskForm;
  setFormInput: React.Dispatch<React.SetStateAction<ITaskForm>>;
}
export const SelectableRadioButton: FC<IRadioBtn> = ({
  name,
  formInput,
  setFormInput,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
  const target =   e.target as HTMLElement
    if (e.currentTarget.id == name) {
      setFormInput((prev) => {
      return{...prev,category:target.id}
      });
    }
  };
  return (
    <div className="flex space-x-4">
      <label className="cursor-pointer" htmlFor={name}>
        <input type="radio" className="hidden" id={name} value={name} />
        <button
          type="button"
          className={` rounded-full border-2 p-1 w-[6rem] ${formInput?.category === name && `bg-[#7B1984] text-white` }`}
          id={name}
          onClick={handleClick}
        >
          {name}
        </button>
      </label>
    </div>
  );
};
