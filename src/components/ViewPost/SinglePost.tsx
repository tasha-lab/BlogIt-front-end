import { Avatar, Button, Paper, Typography } from "@mui/material";
import { Calendar1, Share2 } from "lucide-react";

interface SingleBlog {
  title: string;
  content: string;
  dateCreated: string;
  postImage: string;
  blogId: string;
  user: { firstName: string; lastName: string };
}
interface SingleBlogProps {
  blog: SingleBlog;
}

const SinglePost = ({ blog }: SingleBlogProps) => {
  return (
    <>
      <div className="single-post">
        <Paper sx={{ width: "90%" }}>
          <div className="post-body">
            <div className="post-title">
              <h4>{blog.title}</h4>
            </div>
            <div className="author">
              <div className="avatar-details">
                <Avatar>
                  {(
                    `${blog.user.firstName}`[0] + `${blog.user.lastName}`[0]
                  ).toUpperCase()}
                </Avatar>
                <div className="authors-name">
                  <p>
                    {blog.user.firstName} {blog.user.lastName}
                  </p>
                  <p>
                    <Calendar1 size="1.6rem" />
                    {new Date(blog.dateCreated).toISOString().split("T")[0]}
                  </p>
                </div>
              </div>
              <div className="button-share">
                <Button variant="contained">
                  <Share2 size="1.6rem" /> Share
                </Button>
              </div>
            </div>
            <div className="postImage">
              <div className="post-picture">
                <img src={blog.postImage} />
              </div>
            </div>
            <div className="post-content-blog">
              <p>{blog.content}</p>
            </div>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default SinglePost;
