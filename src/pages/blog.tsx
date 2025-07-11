import Navbar from "../components/Common/Navbar";
import SinglePost from "../components/ViewPost/SinglePost";
import PostHeading from "../components/ViewPost/PostHeading";
import { useQuery } from "@tanstack/react-query";
import Api from "../Api/axios";
import { GridLoader } from "react-spinners";
import { useParams } from "react-router-dom";

interface SingleBlog {
  title: string;
  content: string;
  dateCreated: string;
  postImage: string;
  blogId: string;
  user: { firstName: string; lastName: string };
}
const Blog = () => {
  const { blogId } = useParams();
  const { data: blog, isLoading } = useQuery<SingleBlog>({
    queryKey: ["SeeAblog", blogId],
    queryFn: async () => {
      const response = await Api.get(`/blogs/${blogId}`);
      return response.data.data;
    },
    enabled: !!blogId,
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
      <div className="single-blog-container">
        <PostHeading />
        {blog && <SinglePost blog={blog} />}
      </div>
    </>
  );
};

export default Blog;
