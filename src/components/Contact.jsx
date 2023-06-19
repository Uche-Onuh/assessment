import React from "react";
import { tokens } from "../theme";
import {
  Box,
  Typography,
  useTheme,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import SectionHeader from "./SectionHeader";
import { Formik } from "formik";
import * as yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const phoneRegExp =
  /((^090)([23589]))|((^070)([1-9]))|((^080)([2-9]))|((^081)([0-9]))(\d{7})/;

const signupSchema = yup.object().shape({
  firstName: yup.string().max(255).required("First Name is required"),
  lastName: yup.string().max(255).required("Last Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number required"),
  message: yup
    .string()
    .min(30, "Message must be at least 30 characters")
    .required("Message is required"),
});

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = (values) => {
    // submit logic
    console.log(values);
  };

  return (
    <Box width="100%" id="contact">
      <Box
        width="80%"
        mx="auto"
        padding="0 0 70px 0"
        sx={{
          [theme.breakpoints.down("md")]: {
            width: "90%",
          },
        }}
      >
        <Stack>
          <SectionHeader title="Connect with me" />
          <Box
            width="100%"
            mx="auto"
            padding="0 50px"
            sx={{
              [theme.breakpoints.down("md")]: {
                width: "100%",
                padding: "0 20px",
              },
            }}
          >
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={signupSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Stack spacing="20px">
                    <TextField
                      fullWidth
                      variant="filled"
                      label="First Name"
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      error={!!touched.firstName && errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Last Name"
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      name="lastName"
                      error={!!touched.lastName && errors.lastName}
                      helperText={touched.lastName && errors.lastName}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Email"
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      error={!!touched.email && errors.email}
                      helperText={touched.email && errors.email}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Phone Number"
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone}
                      name="phone"
                      error={!!touched.phone && errors.phone}
                      helperText={touched.phone && errors.phone}
                    />
                    <TextField
                      fullWidth
                      multiline
                      minRows={6}
                      variant="filled"
                      label="Message"
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.message}
                      name="message"
                      error={!!touched.message && errors.message}
                      helperText={touched.message && errors.message}
                    />
                  </Stack>

                  <Box
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    mt="40px"
                    mb="25px"
                  >
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        py: "15px",
                        width: "100%",
                        textTransform: "capitalize",
                        ":hover": {
                          bgcolor:
                            theme.palette.mode === "dark"
                              ? colors.primary[500]
                              : colors.secondary[500],
                          color:
                            theme.palette.mode === "dark"
                              ? colors.secondary[500]
                              : colors.primary[500],
                        },
                      }}
                    >
                      <Typography
                        variant="h3"
                        fontWeight="500"
                        sx={{
                          [theme.breakpoints.down("md")]: {
                            fontSize: "18px",
                          },
                        }}
                      >
                        Send Message
                      </Typography>
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
