import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../Api/axios";

interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["registerUser"],
    mutationFn: async (newUser: User) => {
      const response = await Api.post("/auth", newUser);
      return response.data;
    },
    onError: (error: any) => {
      console.error("Registration error:", error.response?.data?.message);
    },
    onSuccess: (data) => {
      console.log(data.message);
      navigate("/");
    },
  });

  const HandleSignUp = () => {
    const newUser = { firstName, lastName, username, email, password };
    console.log(newUser);
    mutate(newUser);
  };
  return (
    <>
      <Box>
        <Grid container justifyContent={"center"} mb={"2rem"} mt={"2rem"}>
          <Grid
            border={"1px solid black"}
            size={{ xs: 10, md: 4 }}
            component={"form"}
            p={"3rem"}
          >
            <Stack spacing={2}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                component={"div"}
              >
                <div className="logo-picture">
                  <img src="./images/logo.png" alt="" />
                </div>
                <h2>Welcome to BlogIt</h2>
              </Stack>
              <TextField
                label="Enter your firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                label="Enter your lastname"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
              <TextField
                label="Enter your  Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Enter your Username"
                value={username}
                onChange={(e) => setuserName(e.target.value)}
              />
              <TextField
                type="password"
                label="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                type="password"
                label="Confirm password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{ bgcolor: "#7266ab" }}
                onClick={HandleSignUp}
                loading={isPending}
              >
                Sign up
              </Button>
              <Typography
                fontSize={"1.5rem"}
                display={"flex"}
                justifyContent={"center"}
              >
                Already have an account? <Link to="/login">Login</Link>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Signup;
