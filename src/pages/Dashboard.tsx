import { useQuery } from "@tanstack/react-query";
import Api from "../Api/axios";
import { GridLoader } from "react-spinners";
import Dashboardposts from "../components/Dashboard/dashboardblogs";

interface Blog {
  blogId: string;
  postImage: string;
  title: string;
  synopsis: string;
  dateCreated: string;
  isDeleted: boolean;
}
const Dashboard = () => {
  const {
    data: blog = [],
    isLoading,
    refetch,
  } = useQuery<Blog[]>({
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
      <div className="profile-header">
        <h3>My posts</h3>
      </div>
      {blog.map((blog: Blog, index: number) => (
        <Dashboardposts
          key={blog.blogId}
          delay={index}
          blog={blog}
          refetch={refetch}
        />
      ))}
    </div>
  );
};

export default Dashboard;
