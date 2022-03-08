// import TextField from '@mui/material/TextField';

// import { Controller ,useForm} from "react-hook-form";
// import React from "react";

// export const FormInputText = ({ name, control, label }) => {
//     const [textValue, setTextValue] = useState("");

//     const onTextChange = (e) => setTextValue(e.target.value);
//     // const handleSubmit = () => console.log(textValue);
//     const handleReset = () => setTextValue("");
  
//     const { handleSubmit, reset, control } = useForm();
//     const onSubmit = (data) => console.log(data);
//   return (<>
//     <Controller
//         name={"textValue"}
//         control={control}
//         render={({ field: { onChange, value } }) => (
//           <TextField onChange={onChange} value={value} label={"Text Value"} />
//         )}
//       />
//       <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
//       <Button onClick={() => reset()} variant={"outlined"}>Reset</Button>
//     </>);
// };