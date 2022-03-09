import React from "react";
import Button from "@mui/material/Button";

const BaseButton = () => {
  return (
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      Sign Up
    </Button>
  );
};

export default BaseButton;
