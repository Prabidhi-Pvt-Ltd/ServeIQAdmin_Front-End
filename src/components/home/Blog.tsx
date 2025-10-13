import image1 from "../../assets/images/blog/blogimage.png";
import image2 from "../../assets/images/blog/blog-image2.png";
import image3 from "../../assets/images/blog/blog-image3.png";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Revolutionizing Restaurant Operations: The Power of Management Software",
      date: "Published on Mar 21, 2024",
      image: image1,
    },
    {
      id: 2,
      title: "How Hotel Management Systems Enhance Guest Experience",
      date: "Published on Mar 21, 2024",
      image: image2,
    },
    {
      id: 3,
      title:
        "From Manual Chaos to Digital Order: Why Every Restaurant Needs POS Integration",
      date: "Published on Mar 21, 2024",
      image: image3,
    },
  ];

  return (
    <section className="bg-red-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10">
          {/* Blog Cards Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 w-full lg:w-3/4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white hover:scale-105 transition-transform duration-300 rounded-lg shadow-md p-4 w-full sm:w-[45%] lg:w-[30%]"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-gray-800 text-base font-semibold mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">{blog.date}</p>
              </div>
            ))}
          </div>

          {/* Blog Info Section */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-1/4 flex flex-col justify-between">
            <div>
              <h3 className="text-red-600 text-sm font-bold uppercase tracking-wide">
                Our Blogs
              </h3>
              <h4 className="text-black text-xl font-semibold mt-2">
                Explore Our Blog
              </h4>
              <p className="text-sm mt-3 text-gray-600 leading-relaxed">
                Discover insightful articles and tips to elevate your business
                journey.
              </p>
            </div>
            <button className="bg-red-600 hover:bg-red-700 transition-transform hover:scale-105 text-white py-2 px-4 rounded mt-6 self-start">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
