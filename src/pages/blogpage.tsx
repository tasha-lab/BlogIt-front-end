import { useQuery } from "@tanstack/react-query";
import Api from "../Api/axios";
import BlogsCards from "../components/Blogs/BlogsCards";
import Blogsheading from "../components/Blogs/blogsheading";
import Navbar from "../components/Common/Navbar";
interface Blog {
  blogId: string;
  postImage: string;
  title: string;
  synopsis: string;
  content: string;
}

const Blogpage = () => {
  const {
    data: blogs = [],
    isLoading,
    isError,
  } = useQuery<Blog[]>({
    queryKey: ["postBlog"],
    queryFn: async () => {
      const response = await Api.get("/blogs");
      return response.data.data;
    },
  });

  if (isLoading) return <p>Loading blogs...</p>;
  if (isError) return <p>Error loading blogs.</p>;

  return (
    <>
      <Navbar />
      <div className="blog-page">
        <Blogsheading />
        {blogs.map((blog: Blog, index: number) => (
          <BlogsCards key={blog.blogId} delay={index} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blogpage;
