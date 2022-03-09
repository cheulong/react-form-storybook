import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      acceptTerms: false,
      isRemember: false,
    },
  });
  const onSubmit = (data) => console.log(data);
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <>
      {isSignUp ? (
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
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{ mt: 1 }}
              >
                <Controller
                  id="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email Address"
                      required
                      fullWidth
                      autoFocus
                    />
                  )}
                />

                <Controller
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Password"
                      required
                      fullWidth
                      autoComplete="current-password"
                      margin="normal"
                    />
                  )}
                />

                <FormControlLabel
                  control={
                    <Controller
                      name="isRemember"
                      id="isRemember"
                      acceptTerms
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          {...field}
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          color="primary"
                          value="remember"
                        />
                      )}
                    />
                  }
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link
                      href="#"
                      onClick={() => setIsSignUp((prev) => !prev)}
                      variant="body2"
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </Container>
      ) : (
        <>
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
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      autoComplete="given-name"
                      name="firstName"
                      fullWidth
                      id="firstName"
                      autoFocus
                      control={control}
                      render={({ field }) => (
                        <TextField {...field} label="First Name" required />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      fullWidth
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      control={control}
                      render={({ field }) => (
                        <TextField {...field} label="Last Name" required />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      id="email"
                      name="email"
                      autoComplete="email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Email Address"
                          required
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Password"
                          required
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Password"
                          required
                          fullWidth
                        />
                      )}
                    />

                    <FormControlLabel
                      control={
                        <Controller
                          name="acceptTerms"
                          id="acceptTerms"
                          acceptTerms
                          control={control}
                          render={({ field }) => (
                            <Checkbox
                              {...field}
                              checked={field.value}
                              onChange={(e) => field.onChange(e.target.checked)}
                            />
                          )}
                        />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      href="#"
                      onClick={() => setIsSignUp((prev) => !prev)}
                      variant="body2"
                    >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </>
      )}
    </>
  );
}
