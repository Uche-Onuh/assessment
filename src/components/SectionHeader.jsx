import React from "react";
import { Typography, useTheme } from "@mui/material";

const SectionHeader = ({ title }) => {
  const theme = useTheme();
  return (
    <Typography
      variant="h2"
      fontWeight="500"
      mb="35px"
      sx={{
        [theme.breakpoints.down("md")]: {
          fontSize: "25px",
        },
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionHeader;
