// import React, { useState } from "react";
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import { Controller, useForm } from "react-hook-form";
// import { FormInputText } from "./FormInputText ";
// const AuthPage = () => {
//     const [textValue, setTextValue] = useState("");

//     const onTextChange = (e) => setTextValue(e.target.value);
//     // const handleSubmit = () => console.log(textValue);
//     const handleReset = () => setTextValue("");
  
//     const { handleSubmit, reset, control } = useForm();
//     const onSubmit = (data) => console.log(data);
  
//     return (
//      <form>
//       <FormInputText
//         name={"textInput"}
//         control={control}
//         label={"Text Input"}
//       />
//     </form>
//     );
// }

// export default AuthPage