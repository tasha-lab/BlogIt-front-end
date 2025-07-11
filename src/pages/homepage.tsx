import Navbar from "../components/Common/Navbar";
import Herosection from "../components/Home/hero";
import Newsletter from "../components/Home/newsletter";
import TrendingThisMonth from "../components/Home/trendingThisMonth";
import TrendingToday from "../components/Home/TrendingToday";
import { useAuth } from "../store/useAuth";

const Homepage = () => {
  const { token } = useAuth();
  return (
    <>
      <Navbar />
      <div className="homesection">
        <Herosection />
        {token ? (
          <>
            <TrendingToday />
            <TrendingThisMonth />
          </>
        ) : (
          <></>
        )}
        <Newsletter />
      </div>
    </>
  );
};

export default Homepage;
