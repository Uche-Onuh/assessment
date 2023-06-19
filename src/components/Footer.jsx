import React from "react";
import { tokens } from "../theme";
import { Box, Typography, useTheme, Stack } from "@mui/material";
import {
  logo,
  facebook,
  insta,
  linkedin,
  twitter,
  mail,
  phone,
} from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      backgroundColor={
        theme.palette.mode === "dark" ? "#2a232b" : colors.primary[500]
      }
      color={colors.secondary[500]}
    >
      <Box maxWidth="80%" margin="0 auto" py="50px">
        <Box
          display="flex"
          flexDirection="row"
          alignContent="top"
          justifyContent="space-between"
          gap="40px"
          mb="40px"
          sx={{
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
            },
          }}
        >
          <Box
            width="30%"
            sx={{
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          >
            <Box
              width="300px"
              mb="20px"
              sx={{
                [theme.breakpoints.down("md")]: {
                  width: "200px",
                },
              }}
            >
              <img src={logo} alt="moniemove logo" width="100%" />
            </Box>
          </Box>
          <Stack pt="35px">
            <Typography variant="h5" textTransform="uppercase" mb="55px">
              Socials
            </Typography>
            <Typography variant="h5" textTransform="capitalize">
              Connect with us
            </Typography>
            <Stack
              direction="row"
              spacing="20px"
              alignItems="center"
              mt="30px"
              sx={{
                [theme.breakpoints.down("md")]: {
                  width: "100%",
                },
              }}
            >
              <Box
                width="25px"
                sx={{
                  ":hover": {
                    cursor: "pointer",
                    translate: "0 -10px",
                    transition: "all 0.5s",
                  },
                }}
              >
                <Link to="">
                  <img
                    src={facebook}
                    alt="facebook"
                    width="100%"
                    height="25px"
                  />
                </Link>
              </Box>
              <Box
                width="25px"
                sx={{
                  ":hover": {
                    cursor: "pointer",
                    translate: "0 -10px",
                    transition: "all 0.5s",
                  },
                }}
              >
                <Link to="">
                  <img
                    src={twitter}
                    alt="facebook"
                    width="100%"
                    height="25px"
                  />
                </Link>
              </Box>
              <Box
                width="25px"
                sx={{
                  ":hover": {
                    cursor: "pointer",
                    translate: "0 -10px",
                    transition: "all 0.5s",
                  },
                }}
              >
                <Link to="">
                  <img
                    src={linkedin}
                    alt="facebook"
                    width="100%"
                    height="25px"
                  />
                </Link>
              </Box>
              <Box
                width="25px"
                sx={{
                  ":hover": {
                    cursor: "pointer",
                    translate: "0 -10px",
                    transition: "all 0.5s",
                  },
                }}
              >
                <Link to="">
                  <img src={insta} alt="facebook" width="100%" height="25px" />
                </Link>
              </Box>
            </Stack>
          </Stack>
          <Stack pt="35px">
            <Typography variant="h5" textTransform="uppercase" mb="55px">
              Short Links
            </Typography>
            <Typography variant="h5" textTransform="capitalize" mb="30px">
              <a href="#hero">Home</a>
            </Typography>
            <Typography variant="h5" textTransform="capitalize" mb="30px">
              <a href="#hobbies">Hobbies</a>
            </Typography>
            <Typography variant="h5" textTransform="capitalize" mb="30px">
              <a href="#gallery">Gallery</a>
            </Typography>
            <Typography variant="h5" textTransform="capitalize" mb="30px">
              <a href="#contact">Contact Us</a>
            </Typography>
          </Stack>
          <Stack pt="35px">
            <Typography variant="h5" textTransform="uppercase" mb="40px">
              Contact Info
            </Typography>
            <Stack direction="row" spacing="10px" mb="30px">
              <Box
                width="30px"
                backgroundColor="#fff"
                padding="2px 5px"
                sx={{ borderRadius: "50%" }}
              >
                <img src={phone} alt="phone" width="100%" color="#fff" />
              </Box>
              <Typography variant="h5">
                <a href="tel:08126187148">+234 812 618 7148</a>
              </Typography>
            </Stack>

            <Stack direction="row" spacing="10px" mb="30px" alignItems="center">
              <Box
                width="30px"
                backgroundColor="#fff"
                padding="2px 5px"
                sx={{ borderRadius: "50%" }}
              >
                <img src={mail} alt="phone" width="100%" />
              </Box>
              <Typography variant="h5">
                <a href="mailto: onuhblaze@gmail.com">onuhblaze@gmail.com</a>
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <hr />

        <Typography variant="h5" mt="30px" textAlign="center">
          All content Copyright &copy; 2023 All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
