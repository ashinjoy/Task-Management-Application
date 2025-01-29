// import * as React from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { ITaskForm } from "../../interface/inferface";

import { FC } from "react";

// interface ISelectBox {
//   formInput: ITaskForm;
//   setFormInput?: React.Dispatch<React.SetStateAction<ITaskForm>>;
// }
// const status = ["TO-DO", "IN-PROGRESS", "COMPLETED"];
// export const SelectBox: React.FC<ISelectBox> = ({
//   formInput,
//   setFormInput,
// }) => {
//   const handleChange = (e: SelectChangeEvent) => {
//     setFormInput((prev) => {
//       return { ...prev, taskStatus: e.target.value };
//     });
//   };
//   return (
//     <Box sx={{ width: '7rem', height:'auto' }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Choose</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={formInput.taskStatus}
//           label="Choose"
//           onChange={handleChange}
//         >
//           {status.map((el, index) => {
//             return (
//               <MenuItem value={el} key={index}>
//                 {el}
//               </MenuItem>
//             );
//           })}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };

export const SelectBox:FC = ()=>{
  
  return <>
  <select name="" id="" className="w-[55%] md:w-[80%] p-2 border-2 rounded-lg " >
    <option value="">Todo</option>
    <option value="">Progess</option>
    <option value="">Completed</option>
  </select>
  </>
}
