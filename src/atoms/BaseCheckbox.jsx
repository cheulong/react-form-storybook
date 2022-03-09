import React from "react";
import Checkbox from "@mui/material/Checkbox";

const BaseCheckbox = () => {
  return (
    <Checkbox
      name="isRemember"
      id="isRemember"
      acceptTerms
      color="primary"
      value="remember"
    />
  );
};

export default BaseCheckbox;
