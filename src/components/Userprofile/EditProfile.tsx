import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "../../Api/axios";
import { useAuth } from "../../store/useAuth";

interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

const EditProfile = () => {
  const location = useLocation();
  const editProfileDetails = location.state?.user;
  const { user, refreshUser } = useAuth();
  console.log(user);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setlastName] = useState(user?.lastName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [username, setuserName] = useState(user?.username || "");

  const { isPending, mutate } = useMutation({
    mutationKey: ["EditingUsersDetails"],
    mutationFn: async (updatedDetails: User) => {
      const response = await Api.patch("/auth/user", updatedDetails);
      return response.data;
    },
    onError: (error: any) => {
      console.error("Posting error:", error.response?.data?.message);
    },
    onSuccess: (data) => {
      console.log(data.message);
      refreshUser();
    },
  });
  const handleEditProfile = () => {
    const details: User = {
      firstName,
      lastName,
      email,
      username,
    };
    mutate(details);
  };

  return (
    <div>
      <div className="profile-header">
        <h3>Edit profile</h3>
      </div>
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
                  label="firstname"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <TextField
                  label="lastname"
                  value={lastName}
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                />
                <TextField
                  label=" Email"
                  value={email}
                  disabled
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <TextField
                  label="Username"
                  value={username}
                  onChange={(e) => {
                    setuserName(e.target.value);
                  }}
                />
                <Button
                  loading={isPending}
                  onClick={handleEditProfile}
                  variant="contained"
                  sx={{ bgcolor: "#7266ab" }}
                >
                  Edit profile
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </>
    </div>
  );
};

export default EditProfile;
