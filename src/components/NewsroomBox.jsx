import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Calendar,
  ArrowRight,
  Mail,
  CheckCircle,
} from "lucide-react";
import imageDown from "../assets/SliderAreaImages/image1.jpg";
// import image2 from "../assets/newsroomImages/image2.jpg"
import {
  articles1,
  articles2,
  articles3,
  articles4,
} from "../data/articleData";

const NewsroomBox = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // In a real app, this would call an API
    setIsSubscribed(true);
    setEmail("");
  };

  const featured = articles3[0];

  // const articles1 = [
  //   {
  //     id: 1,
  //     title: "KPNG Completes Groundbreaking Solar Park in South Africa",
  //     excerpt:
  //       "KPNG successfully delivered a state-of-the-art solar park in South Africa, providing sustainable energy to thousands of homes. This project reinforces our commitment to renewable energy and environmental sustainability.",
  //     image: image2,
  //     category: "Sustainability",
  //     date: "January 2025",
  //     redirect: "/newsroom/article",
  //   },
  //   {
  //     id: 2,
  //     title: "Launch of New Smart City Solutions Initiative",
  //     excerpt:
  //       "KPNG introduces its new Smart City Solutions program, leveraging IoT and AI technologies to create smarter, safer, and more efficient urban environments globally.",
  //     image:
  //       "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
  //     category: "Technology",
  //     date: "December 2024",
  //     redirect: "/newsroom/article",
  //   },
  //   {
  //     id: 3,
  //     title: "Global Expansion: New Offices in Russia and South America",
  //     excerpt:
  //       "KPNG announces the opening of its new regional offices in Moscow, Russia, and Santiago, Chile, marking another step in our global expansion journey.",
  //     image:
  //       "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
  //     category: "Workplace",
  //     date: "November 2024",
  //     redirect: "/newsroom/article",
  //   },
  // ];

  // const articles2 = [
  //   {
  //     id: 1,
  //     title: "The Future of Green Construction",
  //     excerpt:
  //       "Discover how green building certifications, sustainable materials, and innovative designs are shaping the future of eco-friendly infrastructure development.",
  //     image:
  //       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
  //     category: "Sustainability",
  //     date: "Februray 2025",
  //     redirect: "/newsroom/article",
  //   },
  //   {
  //     id: 2,
  //     title: "Powering the World Sustainably",
  //     excerpt:
  //       "Explore the latest trends in renewable energy and how KPNG is leading the way in solar, wind, and hydroelectric projects worldwide.",
  //     image:
  //       "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
  //     category: "Sustainability",
  //     date: "Februray 2025",
  //     redirect: "/newsroom/article",
  //   },
  //   {
  //     id: 3,
  //     title: "The Role of Technology in Infrastructure Development",
  //     excerpt:
  //       "Learn how IoT, AI, and automation are transforming the construction and infrastructure industry for greater efficiency and precision.",
  //     image:
  //       "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
  //     category: "Technology",
  //     date: "January 2025",
  //     redirect: "/newsroom/article",
  //   },
  // ];

  // const articles3 = [
  //   {
  //     id: 1,
  //     title: "Iconic Infrastructure in Dubai",
  //     excerpt:
  //       "A closer look at how KPNG contributed to the creation of a landmark commercial complex in Dubai, combining innovative design with sustainable practices.",
  //     image:
  //       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
  //     category: "Infrastructure",
  //     date: "January 2025",
  //     redirect: "/newsroom/article",
  //   },
  //   {
  //     id: 2,
  //     title: "Renewable Energy Success in Brazil",
  //     excerpt:
  //       "Learn about our journey in developing a wind energy project that powers over 100,000 homes in rural Brazil, driving progress and sustainability.",
  //     image:
  //       "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
  //     category: "Sustainability",
  //     date: "January 2025",
  //     redirect: "/newsroom/article",
  //   },
  // ];

  // const articles4 = [
  //   {
  //     id: 1,
  //     title: "Emerging Trends in Energy Storage Solutions",
  //     excerpt:
  //       "Explore the latest advancements in battery technology and grid storage systems, enabling reliable and efficient renewable energy distribution.",
  //     image:
  //       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
  //     category: "Sustainability",
  //     date: "December 2024",
  //     redirect: "/newsroom/article",
  //   },
  //   {
  //     id: 2,
  //     title: "Smart Cities: The Next Frontier",
  //     excerpt:
  //       "Discover how smart cities are revolutionizing urban living and how KPNG is at the forefront of this transformation.",
  //     image:
  //       "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
  //     category: "Technology",
  //     date: "November 2024",
  //     redirect: "/newsroom/article",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-[#f2f8fd] font-roboto-condensed">
      <div className="min-h-[75vh] w-full flex flex-col justify-center items-center px-5">
        <h1 className="font-light text-5xl md:text-7xl text-center uppercase">
          <span className="font-normal">Blog & News</span>
        </h1>
        <h3 className="font-light text-5xl md:text-7xl text-center uppercase">
          Stay Updated with KPNG
        </h3>
        <p className="font-light text-xl max-w-screen-md tracking-wider text-center py-8">
          Welcome to our Blog & News section, where we bring you the latest
          updates, insights, and developments from the world of power,
          infrastructure, and technology. Explore our stories, gain valuable
          industry insights, and learn about the innovative projects shaping the
          future.
        </p>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="relative rounded-xl overflow-hidden group">
          <img
            src={featured.image}
            alt="Featured"
            className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Featured Story
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {featured.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 line-clamp-3">
                {featured.excerpt}
              </p>
              <Link
                to={featured.redirect}
                state={featured}
                className="inline-flex items-center text-white bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors group text-sm sm:text-base"
              >
                Read Full Story
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102a41]">
              Latest News
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Stay updated with our most recent stories
            </p>
          </div>
          <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {articles1.map((article) => (
            <div key={article.id} className="group">
              <Link to={article.redirect} state={article} className="block">
                <div className="relative overflow-hidden rounded-xl mb-4 sm:mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity" />
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-3 sm:mb-4 text-sm">
                    <span className="text-blue-600 font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#102a41] mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4 text-sm sm:text-base">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 text-sm sm:text-base">
                    Read full story
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Insights Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102a41]">
              Recent Insights
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Stay updated with our most recent insights
            </p>
          </div>
          <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {articles2.map((article) => (
            <div key={article.id} className="group">
              <Link to={article.redirect} state={article} className="block">
                <div className="relative overflow-hidden rounded-xl mb-4 sm:mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity" />
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-3 sm:mb-4 text-sm">
                    <span className="text-blue-600 font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#102a41] mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4 text-sm sm:text-base">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 text-sm sm:text-base">
                    Read full story
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Project Highlights Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102a41]">
              Project Highlights
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Stay updated with our projects highlights
            </p>
          </div>
          <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {articles3.map((article) => (
            <div key={article.id} className="group">
              <Link to={article.redirect} state={article} className="block">
                <div className="relative overflow-hidden rounded-xl mb-4 sm:mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity" />
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-3 sm:mb-4 text-sm">
                    <span className="text-blue-600 font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#102a41] mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4 text-sm sm:text-base">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 text-sm sm:text-base">
                    Read full story
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Trends Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102a41]">
              Industry Trends
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Stay updated with industry trends
            </p>
          </div>
          <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {articles4.map((article) => (
            <div key={article.id} className="group">
              <Link to={article.redirect} state={article} className="block">
                <div className="relative overflow-hidden rounded-xl mb-4 sm:mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity" />
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-3 sm:mb-4 text-sm">
                    <span className="text-blue-600 font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#102a41] mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4 text-sm sm:text-base">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 text-sm sm:text-base">
                    Read full story
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-white mb-6 animate-bounce" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Sign up for our newsletter to receive updates on our projects,
              industry insights, and company news directly in your inbox.
            </p>
            {isSubscribed ? (
              <div className="flex items-center justify-center space-x-2 text-white">
                <CheckCircle className="h-6 w-6" />
                <span className="text-lg">Thanks for subscribing!</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-[#102a41] placeholder-gray-500 bg-white/90 backdrop-blur-sm border border-transparent focus:border-blue-300 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-150 ease-in-out"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="mt-4 text-sm text-blue-100 opacity-80">
              No spam ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center relative py-28">
        <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div>
            <img
              src={imageDown}
              alt="Collaborative Partner"
              className="w-full h-full object-cover shadow"
            />
          </div>

          {/* Text Section */}
          <div className="md:absolute max-w-screen-md right-[20%] top-[25%]">
            <div className="bg-[#102a41] text-white p-8 md:rounded-lg flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
                Let’s Talk
              </h2>
              <h2 className="text-3xl sm:text-4xl uppercase lg:text-5xl font-light mb-4">
                Let’s Build Together
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Need to Reach Us?
              </h3>
              <div>
                <Link to={"/contact"} className="button-48 py-10">
                  <span className="text">CONTACT US</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsroomBox;
