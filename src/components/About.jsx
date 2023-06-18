import React from "react";
import { Box, useTheme, Stack, Typography } from "@mui/material";
import SectionHeader from "./SectionHeader";
import { hobbies } from "../constants";
import { tokens } from "../theme";


const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box padding="70px 0" id="hobbies">
      <Box
        width="80%"
        margin="0 auto"
        pb="80px"
        sx={{
          [theme.breakpoints.down("md")]: {
            width: "90%",
            mx: "auto", 
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <SectionHeader title="My Hobbies" />
        </Stack>

        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          gap="30px"
          justifyContent="space-around"
          sx={{
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              maxWidth: "90%",
            },
          }}
        >
          {hobbies.map((hobby) => (
            <Stack
              width="30%"
              sx={{
                background:
                  theme.palette.mode === "dark"
                    ? colors.primary[500]
                    : "#efefef",
                border:
                  theme.palette.mode === "dark"
                    ? `1px solid ${colors.gray[900]}`
                    : "#efefef",
                [theme.breakpoints.down("md")]: {
                  width: "100%",
                },
              }}
              key={hobby.id}
            >
              <img src={hobby.image} alt="bid" width="100%" height="250px" />
              <Box padding="10px 20px 20px">
                <Typography variant="h4" my="20px" fontWeight="600">
                  {hobby.title}
                </Typography>
                <Typography variant="h5" mb="20px" fontWeight="500">
                  {hobby.p}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
