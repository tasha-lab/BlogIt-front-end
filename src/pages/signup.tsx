import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
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
              <TextField label="Enter your firstname" />
              <TextField label="Enter your lastname" />
              <TextField label="Enter your Username" />
              <TextField label="Enter your  Email" />
              <TextField type="password" label="Enter password" />
              <TextField type="password" label="Confirm password" />
              <Button
                type="submit"
                variant="contained"
                sx={{ bgcolor: "#7266ab" }}
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
