import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const FormLabel = () => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name="isRemember"
          id="isRemember"
          acceptTerms
          color="primary"
          value="remember"
        />
      }
      label="Remember me"
    />
  );
};

export default FormLabel;
