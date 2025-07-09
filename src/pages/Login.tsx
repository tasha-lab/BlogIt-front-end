import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Box>
        <Grid container justifyContent={"center"} mb={"2rem"} mt={"2rem"}>
          <Grid
            border={"1px solid black"}
            size={{ xs: 9, md: 4 }}
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
                <h2>Welcome back</h2>
              </Stack>
              <TextField label="Enter username or email" />
              <TextField type="password" label="Enter password" />
              <Button type="submit" variant="contained">
                Login
              </Button>
              <Stack direction={"row"} gap={"8rem"} justifyContent={"center"}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember me?"
                />
                <Link to="/reset-password">Forgot password</Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
