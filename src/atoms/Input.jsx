import React from "react";
import TextField from "@mui/material/TextField";

const Input = () => {
  return (
    <TextField
      id="email"
      name="email"
      autoComplete="email"
      margin="normal"
      label="Email Address"
      required
      fullWidth
      autoFocus
    />
  );
};

export default Input;
