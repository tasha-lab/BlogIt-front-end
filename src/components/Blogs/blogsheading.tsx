import { Link } from "react-router-dom";

const Blogsheading = () => {
  return (
    <>
      <div className="blogs-body">
        <div className="blogs-title">
          <div className="heading-blog">
            <div className="blog-img">
              <img
                className="animate__hinge"
                src="/images/blogs-post.webp"
                alt=""
              />
            </div>
            <h1>Our blogs</h1>
          </div>
          <p>
            Want to write your blog? Its easy just click on this{" "}
            <Link to="/writeBlogs">Link</Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogsheading;
