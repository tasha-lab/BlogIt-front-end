import { useQuery } from "@tanstack/react-query";
import Api from "../Api/axios";
import BlogsCards from "../components/Blogs/BlogsCards";
import Blogsheading from "../components/Blogs/blogsheading";
import Navbar from "../components/Common/Navbar";
import { GridLoader } from "react-spinners";

interface Blog {
  blogId: string;
  postImage: string;
  title: string;
  synopsis: string;
  content: string;
  dateCreated: string;
  lastupdated: string;
}

const Blogpage = () => {
  const { data: blogs = [], isLoading } = useQuery<Blog[]>({
    queryKey: ["postBlog"],
    queryFn: async () => {
      const response = await Api.get("/blogs");
      return response.data.data;
    },
  });

  if (isLoading)
    return (
      <div className="spinner">
        <GridLoader color="#7266ab" />
      </div>
    );

  return (
    <>
      <Navbar />
      <div className="blog-page">
        <Blogsheading />
        <div className="blogs-card-container">
          {blogs.map((blog: Blog, index: number) => (
            <BlogsCards key={blog.blogId} delay={index} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogpage;
