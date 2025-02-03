import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-white dark:bg-gray-900 font-roboto-condensed">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Client Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            At KPNG, our success is measured by the satisfaction and trust of
            our clients. Over the years, we’ve partnered with organizations
            worldwide, delivering exceptional results and building lasting
            relationships. Here’s what our clients have to say about working
            with us:
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                “A Game-Changer in Infrastructure Development”
              </h3>
              <p className="my-4">
                KPNG delivered our project on time and exceeded our expectations
                in terms of quality and innovation. Their attention to detail
                and ability to understand our requirements made the entire
                process seamless. We are proud to have partnered with a company
                that sets the bar so high in infrastructure development.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Ahmed Al-Harbi</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO, Future Urban Solutions
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                “Exceptional Energy Solutions”
              </h3>
              <p className="my-4">
                KPNG’s renewable energy expertise helped us achieve energy
                efficiency and sustainability for our manufacturing plant. Their
                team’s professionalism and commitment to delivering high-quality
                solutions were unmatched. We’re grateful for their dedication to
                making our vision a reality
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Emily Wright</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Managing Director, Green Innovations Inc.
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                “Reliable and Professional Team”
              </h3>
              <p className="my-4">
                Working with KPNG has been a remarkable experience. They not
                only delivered our project ahead of schedule but also ensured
                that every detail was flawless. Their project management team is
                highly skilled and approachable, making collaboration
                effortless.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Rajesh Khanna</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Director, Zenith Infrastructure India
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                “Innovative and Client-Centric”
              </h3>
              <p className="my-4">
                KPNG’s ability to combine technology with sustainable practices
                is extraordinary. Their smart city solutions brought efficiency
                and modernization to our urban development project. We look
                forward to partnering with them again in the future.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Carlos Mendoza</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Project Manager, Urban Horizons Inc.
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        {/* <div className="text-center">
          <a
            href="#"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Show more...
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonial;
