import { Button, Paper, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Api from "../../Api/axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface Blog {
  title: string;
  synopsis: string;
  content: string;
  postImage: string;
}

const EditingPost = () => {
  const location = useLocation();
  const editBlogDetails = location.state?.blog;

  useEffect(() => {
    if (editBlogDetails) {
      setTitle(editBlogDetails.title);
      setSynopsis(editBlogDetails.synopsis);
      setContent(editBlogDetails.content);
      setPostImage(editBlogDetails.postImage);
    }
  }, [editBlogDetails]);

  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [content, setContent] = useState("");
  const [postImage, setPostImage] = useState("");

  const navigate = useNavigate();
  const { blogId } = useParams();
  const { isPending, mutate } = useMutation({
    mutationKey: ["EditingABlog"],
    mutationFn: async (editedblog: Blog) => {
      const response = await Api.patch(`/blogs/${blogId}`, editedblog);
      return response.data;
    },
    onError: (error: any) => {
      console.error("Edit error:", error.response?.data?.message);
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
  const handleEditBlog = () => {
    const newDetails = { title, synopsis, content, postImage };
    mutate(newDetails);
  };

  return (
    <>
      <div className="profile-header">
        <div className="edit-img">
          <img
            className="animate__animated animate__slideInDown"
            src="/images/pens.webp"
            alt=""
          />
        </div>
        <h3>Edit post</h3>
      </div>
      <div className="blog-content">
        <div className="creating-a-blog">
          <div className="post-card">
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
                  required
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
              onClick={handleEditBlog}
              sx={{ width: "60rem", marginBottom: "2rem" }}
              variant="contained"
            >
              Edit Post
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditingPost;
