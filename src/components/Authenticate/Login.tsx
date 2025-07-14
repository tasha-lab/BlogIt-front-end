import {
  Box,
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: async () => {
      return await login(email, password);
    },
    onError: (error: any) => {
      console.error(
        "Login failed:",
        error?.response?.data?.message || error.message
      );
    },
    onSuccess: () => {
      console.log("Login successful");
      navigate("/");
    },
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    mutate();
  };

  return (
    <Box sx={{ minHeight: "88vh" }}>
      <Grid container justifyContent="center" mb="2rem" mt="2rem">
        <Grid
          border={"1px solid black"}
          size={{ xs: 9, md: 4 }}
          component={"form"}
          p={"3rem"}
        >
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <div className="logo-picture">
                <img src="./images/logo.png" alt="logo" />
              </div>
              <Typography variant="h5">Welcome back</Typography>
            </Stack>

            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button
              onClick={handleLogin}
              variant="contained"
              disabled={isPending}
            >
              {isPending ? "Logging in..." : "Login"}
            </Button>

            <Stack direction="row" justifyContent="space-between">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me?"
              />
              <Link to="/reset-password">Forgot password?</Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
