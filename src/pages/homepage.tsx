import Herosection from "../components/Home/hero";
import Newsletter from "../components/Home/newsletter";
import TrendingThisMonth from "../components/Home/trendingThisMonth";
import TrendingToday from "../components/Home/TrendingToday";

const Homepage = () => {
  return (
    <>
      <div className="homesection">
        <Herosection />
        <TrendingToday />
        <TrendingThisMonth />
        <Newsletter />
      </div>
    </>
  );
};

export default Homepage;
