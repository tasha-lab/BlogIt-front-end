import { Button, Paper, Stack, TextField } from "@mui/material";
import Navbar from "../Common/Navbar";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Api from "../../Api/axios";
import { useNavigate } from "react-router-dom";

const WritingBlogs = () => {
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [content, setContent] = useState("");
  const [postImage, setPostImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["creatingANewBlog"],
    mutationFn: async (formData: FormData) => {
      const response = await Api.post("/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onError: (error: any) => {
      console.error("Posting error:", error.response?.data?.message);
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data.message);
      setTitle("");
      setSynopsis("");
      setContent("");
      setPostImage(null);
      setPreviewImage(null);
      navigate("/dashboard");
    },
  });

  const handleBlogInput = () => {
    if (!postImage) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("synopsis", synopsis);
    formData.append("content", content);
    formData.append("postImage", postImage);

    mutate(formData);
    console.log(formData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPostImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
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

          <Paper sx={{ mt: "3rem" }} className="post-image">
            <Stack className="blog-picture">
              <h4>Enter an image for your blog</h4>
              <input
                style={{ display: "flex" }}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{
                    marginTop: "1rem",
                    maxWidth: "7%",
                    borderRadius: ".8rem",
                  }}
                />
              )}
            </Stack>
          </Paper>

          <div className="post-button">
            <Button
              disabled={isPending}
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
