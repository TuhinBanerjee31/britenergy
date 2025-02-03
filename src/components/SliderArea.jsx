import { useEffect } from "react";
import Glide from "@glidejs/glide";
import image1 from "../assets/SliderAreaImages/image1.jpg";
import { Link } from "react-router-dom";

const SliderArea = () => {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  const insightsData = [
    {
      id: 1,
      imgUrl:
        "https://www.mccarthy.com/sites/default/files/styles/full_width_slide_sm_mobile_2x/public/2025-01/20230403_U-of-A-Applied-Research-Lab_04a.jpg.webp?h=2a309f47&itok=YqLx8vdt",
      desc: "KPNG Completes Groundbreaking Solar Park in South Africa",
    },
    {
      id: 2,
      imgUrl:
        "https://www.mccarthy.com/sites/default/files/styles/full_width_slide_sm_mobile_2x/public/2024-12/BJCToppingOut-32b1.jpg.webp?h=2a309f47&itok=aWIRGP_l",
      desc: "Launch of New Smart City Solutions Initiative",
    },
    {
      id: 3,
      imgUrl:
        "https://www.pv-magazine-india.com/wp-content/uploads/sites/8/2022/03/CI2-1-1200x721.jpg",
      desc: "Global Expansion: New Offices in Russia and South America",
    },
    {
      id: 5,
      imgUrl:
        "https://media.springernature.com/lw685/springer-static/image/art%3A10.1186%2Fs43251-020-00011-w/MediaObjects/43251_2020_11_Fig7_HTML.png?as=webp",
      desc: "Powering the World Sustainably",
    },
    {
      id: 7,
      imgUrl:
        "https://img.rockwool.com/https%3A%2F%2Fbrandcommunity.rockwool.com%2Fasset%2Fb7sYg8GfYQi-Y7rF5XsGAg?rect=0.0000%2C0.000355%2C2500%2C1405&w=928&auto=format&s=cba65c8fc9075ba95a56f6b903c9f1d2",
      desc: "The Future of Green Construction",
    },
    {
      id: 8,
      imgUrl:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fe2a98602-132e-44b1-a836-40c6927d61b7.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1",
      desc: "The Role of Technology in Infrastructure Development",
    },
    {
      id: 10,
      imgUrl:
        "https://www.mdpi.com/buildings/buildings-11-00503/article_deploy/html/images/buildings-11-00503-g001-550.jpg",
      desc: "Iconic Infrastructure in Dubai",
    },
  ];

  return (
    <div className="font-roboto-condensed min-h-screen bg-[#EBEBEB] pt-10">
      <div className="h-full w-full flex flex-col justify-center items-center p-5 md:py-20">
        <h1 className="font-norma text-5xl md:text-7xl">Solving Problems</h1>
        <h3 className="font-light text-5xl md:text-7xl">Before They Happen</h3>
        <p className="font-light text-xl md:text-2xl max-w-screen-sm tracking-wider text-center py-5">
          We combine expertise, process innovation and technology into services
          that proactively identify and address challenges — saving time and
          money on every project.
        </p>
      </div>

      <div className="px-10">
        <h2 className="text-3xl uppercase py-5">Recent Insights</h2>
        {/*<!-- Component: Carousel with controls outside --> */}
        <div className="glide-04 relative w-full">
          {/*    <!-- Slides --> */}
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              {insightsData.map((item) => (
                <li key={item.id}>
                  <img
                    src={item.imgUrl}
                    className="m-auto max-h-full w-full max-w-full"
                  />
                  <p className="p-3">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          {/*    <!-- Controls --> */}
          <div
            className="flex w-full items-center justify-center gap-2 p-4"
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>prev slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>next slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        {/*<!-- End Carousel with controls outside --> */}
      </div>

      <div className="flex items-center relative py-20">
        <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div>
            <img
              src={image1}
              alt="Collaborative Partner"
              className="w-full h-full object-cover shadow"
            />
          </div>

          {/* Text Section */}
          <div className="md:absolute max-w-screen-md right-[20%] top-[25%]">
            <div className="bg-gray-900 text-white p-8 md:rounded-lg flex flex-col justify-center">
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
                <Link to={'/contact'} className="button-48 py-10">
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

export default SliderArea;
