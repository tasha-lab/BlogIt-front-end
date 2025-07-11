// src/components/Blogs/BlogsCards.tsx
import { Box, Card, CardContent, CardMedia, Stack } from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
interface Blog {
  blogId: string;
  postImage: string;
  title: string;
  synopsis: string;
  content: string;
}

interface BlogsCardProps {
  blog: Blog;
  delay?: number;
}

const BlogsCards = ({ blog, delay }: BlogsCardProps) => {
  return (
    <div
      className="blog-cards"
      style={{ animationDelay: `${(delay ?? 0) * 0.1}s` }}
    >
      <Stack
        spacing={3}
        direction={"row"}
        justifyContent={"center"}
        className="card-container"
      >
        <Card className="card">
          <CardMedia className="cardMedia">
            <img src={blog.postImage} alt="Blog image" />
          </CardMedia>

          <CardContent className="cardContent">
            <Box className="Title">
              <h3>{blog.title}</h3>
            </Box>

            <Box className="synopsis">
              <p>{blog.synopsis}</p>
            </Box>

            <Link to="/blog" className="blog-Link">
              Read <ArrowUpRight />
            </Link>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
};
export default BlogsCards;
