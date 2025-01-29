import { Datepicker } from "../datepicker/Datepicker";
import { SelectableRadioButton } from "../radiobutton/SelectableRadioButton";
import { TextEditor } from "../textEditor/TextEditor";
import { SelectBox } from "../selectBox/SelectBox";
import React, { useRef, useState } from "react";
import { Button } from "../button/Button";
import { ITaskForm } from "../../interface/inferface";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { createTask } from "../../services/tasks/taskActions";

export const Form = () => {
  
  const [formInput, setFormInput] = useState<ITaskForm>({
    title: "",
    description: "",
    category: "",
    dueDate: new Date(),
    taskStatus: "",
  });
  const dispatch = useAppDispatch()
  const fileUpload = useRef<HTMLInputElement>(null);
const {userData} =   useAppSelector((state)=>state.user)
  const handleClick = () => {
    fileUpload.current?.click();
  };
    const handleFileUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {
      console.log(evt.target.files);
    };
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (
      formInput.category == "" ||
      formInput.description == "" ||
      formInput.title == "" ||
      formInput.taskStatus == ""
    ) {
      return;
    }
    dispatch(createTask({...formInput,uid:userData?.uid}))
  };


  return (
    <>
      <form action="#" className="flex flex-col gap-3 max-h-[82dvh] overflow-y-auto md:p-3 flex-1" onSubmit={handleSubmit} >
        <input
          type="text"
          name=""
          id=""
          className="outline-transparent border-2 border-slate-400 p-2 rounded-lg"
          placeholder="Task title"
          value={formInput.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormInput({ ...formInput, title: e.target.value })
          }
        />
        <TextEditor formInput={formInput} setFormInput={setFormInput} />
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-col gap-1.5 ">
         <span className="font-semibold text-xs text-slate-400">
          Task Category*
        </span>
        <div className="flex gap-3 ">
          <SelectableRadioButton
            name="Work"
            formInput={formInput}
            setFormInput={setFormInput}
          />
          <SelectableRadioButton
            name="Personal"
            formInput={formInput}
            setFormInput={setFormInput}
          />
        </div>
        </div>
        <div className="flex flex-col gap-1.5 w-2/3  md:items-center">
         <span className="font-semibold text-xs text-slate-400 text-start">Due on*</span>
        <Datepicker formInput={formInput} setFormInput={setFormInput} />
        </div>
        <div className="flex flex-col gap-1.5 w-2/3 md:items-center" >
        <span className="font-semibold text-xs text-slate-400 text-start">
          Task status*
        </span>
        <SelectBox formInput={formInput} setFormInput={setFormInput} />
        </div>
        </div>
        <span className="font-semibold text-xs text-slate-400">Attachment</span>
        <div className="min-w-full flex justify-center items-center gap-2 bg-[#F1F1F1] border-2 p-3 rounded-lg">
          <span>Drop your files here or</span>
          <span className="text-blue-700 underline" onClick={handleClick}>
            Upload
          </span>
          <input
            type="file"
            name=""
            id=""
            placeholder="Update"
            className="hidden"
            ref={fileUpload}
            onChange={handleFileUpload}
          />
        </div>
        <div className="min-w-full bg-[#F1F1F1] p-4 flex justify-end self-end ">
          <Button text="CANCEL" />
          <Button text="CREATE" textColor="text-white" color="bg-[#7B1984]"/>
        </div>  
      </form>
    </>
  );
};
