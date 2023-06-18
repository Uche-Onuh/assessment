import React, { useState } from "react";
import { Box, IconButton, useTheme, Typography, Stack } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [isSelected, setIsSelected] = useState("Home");
  const [mobileSelected, setMobileSelected] = useState("Home");
  const [data, setData] = useState(false);
  return (
    <Box >
      {/* fullscreen navbar */}
      <Box
        display="flex"
        justifyContent="space-between"
        p="10px 50px"
        alignItems="center"
        sx={{
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        {/* logo */}
        <Box width="90px" height="90px">
          <Link to="/">
            <img src={logo} alt="logo" width="100%" height="100%" />
          </Link>
        </Box>

        {/* icons */}
        <Box display="flex" gap="70px" alignItems="center">
          <Box display="flex" gap="20px">
            {navLinks.map((link) => (
              <Typography
                variant="h4"
                fontWeight="600"
                key={link.id}
                sx={{
                  ":hover": {
                    translate: "0 -5px",
                    transition: "all 0.3s",
                    fontWeight: "600",
                  },
                }}
              >
                <a
                  href={link.to}
                  className={isSelected === link.title ? "selected" : ""}
                  onClick={() => setIsSelected(link.title)}
                >
                  {link.title}
                </a>
              </Typography>
            ))}
          </Box>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
        </Box>
      </Box>

      {/* mobile navbar */}
      <Box
        display="flex"
        justifyContent="space-between"
        p="10px 20px"
        alignItems="center"
        sx={{
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
          [theme.breakpoints.down("tablet")]: {
            p: "10px",
          },
        }}
      >
        {/* logo */}
        <Box width="90px" height="90px">
          <Link to="/">
            <img src={logo} alt="logo" width="100%" height="100%" />
          </Link>
        </Box>
        <Box>
          <button
            className={`button-one ${data === false ? "" : "opened"}`}
            aria-controls="primary-navigation"
            onClick={() => {
              setData((prev) => !prev);
            }}
          >
            <svg
              fill="var(--button-color)"
              class="hamburger"
              viewBox="0 0 100 100"
              width="30"
            >
              <rect
                class="line top"
                width="80"
                height="10"
                x="10"
                y="25"
                rx="5"
              ></rect>
              <rect
                class="line middle"
                width="80"
                height="10"
                x="10"
                y="45"
                rx="5"
              ></rect>
              <rect
                class="line bottom"
                width="80"
                height="10"
                x="10"
                y="65"
                rx="5"
              ></rect>
            </svg>
          </button>
        </Box>

        {/* navlinks and buttons  */}
        <Stack
          position="absolute"
          direction="row"
          justifyContent="space-between"
          alignItems="start"
          sx={{
            borderTop: "2px solid #000",
            borderBottom: "2px solid #000",
            backgroundColor:
              theme.palette.mode === "dark"
                ? colors.primary[500]
                : colors.secondary[500],
            zIndex: data === true ? "100" : "-100",
            width: "100%",
            padding: "15px 20px",
            opacity: data === true ? "1" : "0",
            top: "15%",
            left: "0",
            transition: "height 1s ease, opacity 1s ease",
            [theme.breakpoints.up("md")]: {
              display: "none",
            },
          }}
          height={data === true ? "40%" : "0"}
        >
          <Stack direction="column" spacing="30px" alignItems="left">
            {navLinks.map((link) => (
              <Typography
                key={link.id}
                variant="h5"
                color={
                  theme.palette.mode === "dark"
                    ? colors.secondary[500]
                    : colors.primary[500]
                }
                fontWeight="600"
                sx={{
                  ":hover": {
                    translate: "0 -5px",
                    transition: "all 0.3s",
                    fontWeight: "600",
                  },
                }}
              >
                <Link
                  to={link.to}
                  className={
                    mobileSelected === link.title ? "mobileSelected" : ""
                  }
                  onClick={() => {
                    setMobileSelected(link.title);
                    setData((prev) => !prev);
                  }}
                >
                  {link.title}
                </Link>
              </Typography>
            ))}
          </Stack>

          {/* icons */}
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
