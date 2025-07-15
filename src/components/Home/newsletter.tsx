import { TextField, Stack, Button } from "@mui/material";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter">
        <div className="left">
          <h3>Send me news</h3>
          <Stack sx={{ gap: "1.5rem", width: "30rem" }}>
            <TextField label="Enter your Email" />
            <Button variant="contained">subscribe</Button>
          </Stack>
        </div>
        <div className="right">
          <div className="content">
            <h4>Content</h4>
            <ul>
              <li>Blogs</li>
              <li>Write</li>
              <li>Subscription</li>
            </ul>
          </div>
          <div className="company">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Partnership</li>
              <li>Contact us</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="socialmedia">
            <h4>Social</h4>
            <ul>
              <li>Instagram</li>
              <li>Tiktok</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
