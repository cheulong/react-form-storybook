import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import CopyRight from "../molecules/CopyRight";
import FormHeader from "../molecules/FormHeader";
import BaseButton from "../atoms/BaseButton";
import FormLabel from "../molecules/FormLabel";
import Input from "../atoms/Input";

const SignUpForm = () => {
  return (
    <Container>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormHeader />
          <Input />
          <FormLabel />
          <BaseButton />
        </Box>

        <CopyRight />
      </Container>
    </Container>
  );
};

export default SignUpForm;
