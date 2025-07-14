import { Box, Card, CardContent, CardMedia } from "@mui/material";
import { ArrowUpRight, Calendar1, Camera, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface Blog {
  blogId: string;
  postImage: string;
  title: string;
  synopsis: string;
  dateCreated: string;
}
interface individualPostCardsProps {
  blog: Blog;
  delay?: number;
}

const Dashboardposts = ({ blog }: individualPostCardsProps) => {
  return (
    <>
      <div className="user-profile">
        <div className="profile-posts">
          <Card className="users-card">
            <CardMedia className="users-post-media">
              {blog.postImage ? (
                <img src={blog.postImage} alt="Blog image" />
              ) : (
                <div className="placeholder-image">
                  <Camera />
                </div>
              )}
            </CardMedia>
            <CardContent className="users-post-synopsis">
              <div className="read-more">
                <Link to={`/blog/${blog.blogId}`} className="blog-Link">
                  Read <ArrowUpRight />
                </Link>
              </div>
              <Box component={"div"}>
                <Box className="Title">
                  <h3>{blog.title}</h3>
                </Box>
                <p>
                  {blog.synopsis.split(" ").slice(0, 20).join(" ")}
                  {blog.synopsis.split(" ").length > 20 && "..."}
                </p>
              </Box>
              <div className="users-post-date">
                <p style={{ color: "#F44336" }}>
                  <Trash2
                    // onClick={() => handleDeletingaPost(blog.blogId)}
                    size="1.6rem"
                    style={{ marginRight: "1rem", color: "#F44336" }}
                  />
                  Delete
                </p>
                <p>
                  <Calendar1 size="1.6rem" style={{ marginRight: ".5rem" }} />
                  {new Date(blog.dateCreated).toISOString().split("T")[0]}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboardposts;
