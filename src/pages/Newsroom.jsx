import { useState } from "react";
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";

const BlogNews = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <CustomHeader
        bgImg={
          "https://images.unsplash.com/photo-1651195297119-afc97f14a40d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        boldLine={"The way we build"}
        normalLine={"Makes sure to leave a positive impact."}
      />
       <div className="max-w-7xl mx-auto px-6 py-12 font-roboto-condensed">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Blog & News</h1>
        <p className="text-xl text-gray-600 mt-2">Stay Updated with KPNG</p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 bg-white shadow-xl rounded-2xl border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
          <ul className="mt-6 space-y-6">
            <li>
              <p className="text-lg font-semibold text-gray-900">KPNG Completes Groundbreaking Solar Park in South Africa</p>
              <p className="text-sm text-gray-500">January 2025</p>
            </li>
            <li>
              <p className="text-lg font-semibold text-gray-900">Launch of New Smart City Solutions Initiative</p>
              <p className="text-sm text-gray-500">December 2024</p>
            </li>
            <li>
              <p className="text-lg font-semibold text-gray-900">Global Expansion: New Offices in Russia and South America</p>
              <p className="text-sm text-gray-500">November 2024</p>
            </li>
          </ul>
        </div>
        
        <div className="p-8 bg-white shadow-xl rounded-2xl border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">Insights & Articles</h2>
          <ul className="mt-6 space-y-4 text-lg font-medium text-gray-700">
            <li>🌿 The Future of Green Construction</li>
            <li>⚡ Powering the World Sustainably</li>
            <li>🤖 The Role of Technology in Infrastructure Development</li>
          </ul>
        </div>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 bg-white shadow-xl rounded-2xl border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">Project Highlights</h2>
          <ul className="mt-6 space-y-4 text-lg font-medium text-gray-700">
            <li>🏗️ Iconic Infrastructure in Dubai</li>
            <li>🌬️ Renewable Energy Success in Brazil</li>
          </ul>
        </div>
        
        <div className="p-8 bg-white shadow-xl rounded-2xl border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">Industry Trends</h2>
          <ul className="mt-6 space-y-4 text-lg font-medium text-gray-700">
            <li>🔋 Emerging Trends in Energy Storage Solutions</li>
            <li>🏙️ Smart Cities: The Next Frontier</li>
          </ul>
        </div>
      </section>
      
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-10 rounded-2xl text-center shadow-lg">
        <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="text-lg mt-2">Sign up to receive updates on our projects, insights, and news.</p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-lg w-64 text-gray-900 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-gray-900 px-5 py-3 rounded-r-lg text-white font-medium hover:bg-gray-800 transition">Subscribe</button>
        </div>
      </section>
    </div>
      <Footer />
    </>
  );
};

export default BlogNews;
