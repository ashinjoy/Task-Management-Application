import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { FC } from "react";
import { ITaskForm } from "../../interface/inferface";
interface ITextEditor {
  formInput:ITaskForm
  setFormInput: React.Dispatch<React.SetStateAction<ITaskForm>>
  
}
export const TextEditor:FC<ITextEditor> = ({formInput,setFormInput}) => {
  // const [text, setText] = useState<string>("");
  const renderHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
        <button className="ql-list" value="ordered"></button>
        <button className="ql-list" value="bullet"></button>
      </span>
    );
  };

  const header = renderHeader();
  return (
    <>
      <Editor
        value={formInput.description}
        onTextChange={
          (e: EditorTextChangeEvent) => setFormInput({...formInput,description:e.htmlValue || ''})
        }
        headerTemplate={header}
        style={{ height: "6rem" }}
      />
    </>
  );
};

