import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  InputAdornment,
  IconButton,
  InputLabel,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = (data) => {
    console.log("Login successful");
    console.log("=== data ===", data);
  };

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          marginTop: "20px",
          marginBottom: "20px",
          boxShadow:'none'
        }}
      >
        <div>
          <Typography
            variant="h4"
            style={{
              marginBottom: "20px",
            }}
          >
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="box-input">
              <InputLabel
                htmlFor="email"
                style={{
                  textAlign: "left",
                  color: "#181818",
                }}
              >
                Email address
              </InputLabel>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    id="email"
                    className="input-style"
                    margin="normal"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    {...field}
                  />
                )}
              />
            </div>

            <InputLabel
              htmlFor="password"
              style={{
                textAlign: "left",
                color: "#181818",
              }}
            >
              Password
            </InputLabel>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              render={({ field }) => (
                <TextField
                  id="password"
                  className="input-style"
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{
                    backgroundColor: "#F2F2F2",
                    outline: "none",
                    border: "0px solid transparent",
                  }}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  {...field}
                />
              )}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              className="btn-prime"
            >
              Sign in
            </Button>
          </form>
          <p>
            {`Don't have an account?`} <Link to="/register">Register</Link>
          </p>
        </div>
      </Paper>
    </Container>
  );
};

export default Login;
