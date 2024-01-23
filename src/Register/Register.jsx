import { Link } from "react-router-dom";
import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Container,
  Paper,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";

const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const watchPassword = watch("password", "");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = (data) => {
    console.log("Registration successful");
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
            Register
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                pattern: /^\S+@\S+\.\S+$/ || "Invalid email",
              }}
              render={({ field }) => (
                <TextField
                  margin="normal"
                  className="input-style"
                  fullWidth
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  {...field}
                />
              )}
            />
            <InputLabel
              htmlFor="email"
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
                  className="input-style"
                  margin="normal"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
            />
             <InputLabel
              htmlFor="email"
              style={{
                textAlign: "left",
                color: "#181818",
              }}
            >
              Confirm password 
            </InputLabel>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                validate: (value) =>
                  value === watchPassword || "Passwords do not match",
              }}
              render={({ field }) => (
                <TextField
                className="input-style"
                  margin="normal" 
                  type={showConfirmPassword ? "text" : "password"}
                  fullWidth
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleToggleConfirmPasswordVisibility}
                        >
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
            />
            <Button fullWidth variant="contained" color="primary" type="submit" className="btn-prime">
              Submit
            </Button>
          </form>
          <p>
            {`Already have an account?`} <Link to="/">Login</Link>
          </p>
        </div>
      </Paper>
    </Container>
  );
};

export default Register;
