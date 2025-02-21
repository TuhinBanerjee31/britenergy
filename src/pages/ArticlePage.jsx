import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Calendar,
  Share2,
  Bookmark,
  ThumbsUp,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  CheckCircle,
} from "lucide-react";

export function ArticlePage() {
  const navigate = useNavigate();
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const article = location.state;

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this article: ${article.title}`;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(text)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
        break;
    }
    setShowShareTooltip(false);
  };

  return (
    <article className="min-h-screen">
      {/* Back Button */}
      <div className="absolute z-10 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 rounded-full">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-white hover:text-blue-600 transition-colors rounded-full"
          >
            <ArrowLeft className="h-8 w-8 mr-2" />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            {article.category}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <img
                src={article.authorImage}
                alt={article.author}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
              />
              <div>
                <div className="text-white font-medium text-sm sm:text-base">
                  {article.author}
                </div>
                <div className="text-gray-300 text-xs sm:text-sm">
                  {article.authorRole}
                </div>
              </div>
            </div>
            <div className="flex items-center text-gray-300 text-sm sm:text-base">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="ml-2">{article.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Social Share Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 pb-4 sm:pb-6 border-b">
          <div className="flex items-center space-x-6 mb-4 sm:mb-0">
            <div className="relative">
              <button
                onClick={() => setShowShareTooltip(!showShareTooltip)}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base"
              >
                <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Share</span>
              </button>

              {showShareTooltip && (
                <div className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg border p-2 z-50">
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Facebook className="h-4 w-4 text-blue-600" />
                      <span>Facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Twitter className="h-4 w-4 text-blue-400" />
                      <span>Twitter</span>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-blue-700" />
                      <span>LinkedIn</span>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {copied ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <LinkIcon className="h-4 w-4 text-gray-600" />
                      )}
                      <span>{copied ? "Copied!" : "Copy link"}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">
              <Bookmark className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Save</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">
              <ThumbsUp className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Like</span>
            </button>
          </div>
          <div className="text-gray-500 text-xs sm:text-sm">8 min read</div>
        </div>

        {/* Article Body */}
        <div
          className="prose prose-sm sm:prose lg:prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-[#174e75] font-medium text-sm sm:text-base">
              Tags:
            </span>
            {["Technology", "Innovation", "Future", "AI"].map((tag) => (
              <span
                key={tag}
                className="px-2 sm:px-3 py-1 bg-gray-100 text-[#174e75] rounded-full text-xs sm:text-sm hover:bg-gray-200 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
