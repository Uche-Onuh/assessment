import React from "react";
import { Box, useTheme, Stack, Button, Typography } from "@mui/material";
import { tokens } from "../theme";

const Hero = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box className="hero" position="relative">
      <div className="overlay"></div>
      <Stack
        maxWidth="50%"
        position="absolute"
        top="30%"
        left="5%"
        zIndex="20"
        sx={{
          [theme.breakpoints.down("md")]: {
            maxWidth: "80%",
          },
        }}
      >
        <Typography
          variant="h1"
          color={colors.secondary[500]}
          sx={{
            lineHeight: "64px",
            [theme.breakpoints.down("tablet")]: {
              fontSize: "30px",
              lineHeight: "35px",
            },
          }}
          fontWeight="500"
          mb="30px"
        >
          Hi, I am Uche
        </Typography>

        <Typography
          color={colors.secondary[500]}
          variant="h3"
          sx={{
            lineHeight: "29.5px",
            [theme.breakpoints.down("tablet")]: {
              fontSize: "18px",
              lineHeight: "23px",
            },
          }}
          mb="70px"
        >
          A Frontend Developer from Lagos, Nigeria with a passion in building
          beautiful user interfaces, playing video games and reading fantasy
          novels.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Hero;
