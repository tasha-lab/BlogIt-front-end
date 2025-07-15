import { Button, Paper, Stack, TextField } from "@mui/material";
import Navbar from "../Common/Navbar";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Api from "../../Api/axios";
import { useNavigate } from "react-router-dom";

interface Blog {
  title: string;
  synopsis: string;
  content: string;
  postImage: string;
}

const WritingBlogs = () => {
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [content, setContent] = useState("");
  const [postImage, setPostImage] = useState("");
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationKey: ["creatingANewBlog"],
    mutationFn: async (newblog: Blog) => {
      const response = await Api.post("/blogs", newblog);
      return response.data;
    },
    onError: (error: any) => {
      console.error("Posting error:", error.response?.data?.message);
    },
    onSuccess: (data) => {
      console.log(data.message);
      setContent("");
      setSynopsis("");
      setTitle("");
      setPostImage("");
      navigate("/dashboard");
    },
  });
  const handleBlogInput = () => {
    const newBlog = { title, synopsis, content, postImage };
    console.log(newBlog);
    mutate(newBlog);
  };

  return (
    <>
      <Navbar />
      <div className="blog-content">
        <div className="creating-a-blog">
          <div className="post-card">
            <div className="blog-header">
              <h1>
                <div className="create-img">
                  <img
                    className="animate__animated animate__jackInTheBox"
                    src="/images/create-blog.webp"
                    alt=""
                  />
                </div>
                Create a Blog
              </h1>
            </div>
            <Paper className="blog-form">
              <div className="blog-title">
                <h4>Title</h4>
                <TextField
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input-title"
                  sx={{
                    input: {
                      fontSize: "2.5rem",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    },
                  }}
                />
              </div>
              <div className="blog-Synopsis">
                <h4>
                  Synopsis <h5>(Max 20 words)</h5>
                </h4>
                <TextField
                  multiline
                  minRows={5}
                  value={synopsis}
                  onChange={(e) => setSynopsis(e.target.value)}
                  className="input-synopsis"
                  sx={{
                    textarea: {
                      fontSize: "1.5rem",
                      fontWeight: "300",
                      textTransform: "capitalize",
                    },
                  }}
                />
              </div>
              <div className="blog-input-content">
                <h4>Content</h4>
                <TextField
                  multiline
                  minRows={20}
                  maxRows={20}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="input-content"
                  sx={{ textarea: { fontSize: "1.5rem", fontWeight: "300" } }}
                />
              </div>
            </Paper>
          </div>
          <Paper className="post-image">
            <Stack className="blog-picture">
              <h4>
                Enter an image for your blog<h5>(Link)</h5>
              </h4>
              <TextField
                type="text"
                value={postImage}
                onChange={(e) => setPostImage(e.target.value)}
                className="picture-input"
              />
            </Stack>
          </Paper>
          <div className="post-button">
            <Button
              loading={isPending}
              onClick={handleBlogInput}
              sx={{ width: "60rem", marginBottom: "2rem" }}
              variant="contained"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritingBlogs;
