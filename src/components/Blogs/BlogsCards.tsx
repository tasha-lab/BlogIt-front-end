// src/components/Blogs/BlogsCards.tsx
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import { ArrowUpRight, Calendar1, Camera, Clock4 } from "lucide-react";
import { Link } from "react-router-dom";
interface Blog {
  blogId: string;
  postImage: string;
  title: string;
  synopsis: string;
  content: string;
  dateCreated: string;
  lastupdated: string;
}

interface BlogsCardProps {
  blog: Blog;
  delay?: number;
}

const BlogsCards = ({ blog }: BlogsCardProps) => {
  return (
    <Box>
      <Card className="card" sx={{ bgcolor: "background.default" }}>
        <CardMedia className="cardMedia" sx={{ bgcolor: "#FFFFFF" }}>
          {blog.postImage ? (
            <img src={blog.postImage} alt="Blog image" />
          ) : (
            <div className="placeholder-image">
              <Camera />
            </div>
          )}
        </CardMedia>

        <CardContent className="cardContent">
          <Box component={"div"} className="icons">
            <p>
              <Calendar1 size="1.6rem" />
              {new Date(blog.dateCreated).toISOString().split("T")[0]}
            </p>
            <p>
              <Clock4 size="1.6rem" />
              {new Date(blog.lastupdated).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </Box>
          <Box className="Title">
            <h3>{blog.title}</h3>
          </Box>

          <Box className="synopsis">
            {blog.synopsis.split(" ").slice(0, 20).join(" ")}
            {blog.synopsis.split(" ").length > 20 && "..."}
          </Box>

          <Link to={`/blog/${blog.blogId}`} className="blog-Link">
            Read <ArrowUpRight />
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
};
export default BlogsCards;
