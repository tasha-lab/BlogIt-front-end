import { Box, Button, Grid, Stack, TextField } from "@mui/material";

const ResetPassword = () => {
  return (
    <>
      <Box>
        <Grid container justifyContent={"center"} mt={"3rem"} mb={"3rem"}>
          <Grid
            border={"1px solid black"}
            size={{ xs: 9, md: 4 }}
            component={"form"}
            p={"3rem"}
          >
            <Stack component={"div"} spacing={2}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                component={"div"}
              >
                <div className="logo-picture">
                  <img src="./images/logo.png" alt="" />
                </div>
                <h2>Reset Password</h2>
              </Stack>
              <TextField
                type="email"
                label="Enter your email address to reset password"
              />
              <Button type="submit" variant="contained">
                Reset Password
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ResetPassword;
