import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "./validations";
import { ISignInValues } from "./types";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { logInRequest } from "../../stores/reducers/user";
import { TextInput } from "../../common/Form";

const defaultValues: ISignInValues = {
  email: '',
  password: ''
};

function SignIn() {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ISignInValues>({
    mode: "onChange",
    resolver: yupResolver(schema()),
    defaultValues,
  });

  const onSubmit = (values: ISignInValues) => {
    dispatch(logInRequest(values));
  };

  return (
    <Container component="main" maxWidth="xs">
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
          <TextInput
            control={control}
            name="email"
            margin="normal"
            autoComplete="email"
            label="Email Address"
            type="email"
            autoFocus
          />
          <TextInput
            control={control}
            name="password"
            label="Password"
            margin="normal"
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!isValid}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignIn;


