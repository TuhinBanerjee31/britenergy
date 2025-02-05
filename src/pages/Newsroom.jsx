import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";
import image1 from "../assets/newsroomImages/image1.jpg"
import NewsroomBox from "../components/NewsroomBox";

const BlogNews = () => {

  return (
    <>
      <CustomHeader
        bgImg={image1}
        boldLine={"The latest in view"}
        normalLine={"Helps the community to know and grow."}
      />
      <NewsroomBox />

      <Footer />
    </>
  );
};

export default BlogNews;
