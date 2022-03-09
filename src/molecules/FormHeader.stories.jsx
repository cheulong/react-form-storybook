import React from "react";
import Box from "@mui/material/Box";

import FormHeader from "./FormHeader";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/FormHeader",
  component: FormHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Box
    sx={{
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {" "}
    <FormHeader {...args} />
  </Box>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Icon",
};
