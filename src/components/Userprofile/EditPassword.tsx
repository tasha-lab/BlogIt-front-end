import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Api from "../../Api/axios";
import { useAuth } from "../../store/useAuth";

interface User {
  newPassword: string;
  oldPassword: string;
}

const EditPassword = () => {
  const { refreshUser } = useAuth();
  const [newPassword, setnewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isPending, mutate } = useMutation({
    mutationKey: ["EditPassword"],
    mutationFn: async (updatedPassword: User) => {
      const response = await Api.patch("/auth/user/password", updatedPassword);
      return response.data;
    },
    onError: (error: any) => {
      console.error(
        "Password error:",
        error.response?.data?.message || error?.message
      );
    },
    onSuccess: (data: any) => {
      console.log(data.message);

      refreshUser();
    },
  });
  const handleResetPassword = () => {
    if (confirmPassword != newPassword) {
      alert("Your passwords dont match");
      return;
    }
    mutate({ newPassword, oldPassword });
  };
  return (
    <>
      <Box>
        <Grid container mb={"2rem"} mt={"2rem"}>
          <Grid
            justifyContent={"center"}
            border={"1px solid black"}
            size={{ xs: 10, md: 10 }}
            component={"form"}
            width={"20rem"}
            p={"3rem"}
          >
            <Stack spacing={2}>
              <TextField
                label="Old-Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <TextField
                label="New-Password"
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
              />
              <TextField
                label="Confirm-Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
              />
              <Button
                variant="contained"
                loading={isPending}
                onClick={handleResetPassword}
                sx={{ bgcolor: "#7266ab" }}
              >
                Reset Password
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditPassword;
