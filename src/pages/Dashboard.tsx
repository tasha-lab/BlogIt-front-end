import Dashboardposts from "../components/Dashboard/Dashboardposts";
import { useQuery } from "@tanstack/react-query";
import Api from "../Api/axios";
import { GridLoader } from "react-spinners";

interface Blog {
  blogId: string;
  postImage: string;
  title: string;
  synopsis: string;
  dateCreated: string;
}
const Dashboard = () => {
  const { data: blog = [], isLoading } = useQuery<Blog[]>({
    queryKey: ["individualposts"],
    queryFn: async () => {
      const response = await Api.get("/blogs/user/blog");
      return response.data.data;
    },
  });

  if (isLoading) {
    return (
      <div className="spinner">
        <GridLoader color="#7266ab" />
      </div>
    );
  }
  return (
    <div>
      {blog.map((blog: Blog, index: number) => (
        <Dashboardposts key={blog.blogId} delay={index} blog={blog} />
      ))}
    </div>
  );
};

export default Dashboard;
