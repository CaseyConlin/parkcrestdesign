import React, { useEffect, useRef } from "react";
export const FeatureItem = (props: {
  title: string;
  content: string;
  link: string;
  videoUrl: string;
}) => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-10 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h3 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {props.title}
          </h3>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {props.content}
          </p>

          <a
            href={props.link}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-pd-blue hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            See More
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Contact
          </a>
        </div>
        <div className="span-9 lg:mt-0 lg:col-span-5 lg:flex">
          <div>
            <video
              className="border shadow-lg border-slate-600 rounded-lg p-1"
              playsInline
              controls
              loop
              muted
              src={props.videoUrl}
              ref={videoEl}
            />
          </div>
          {/* <video
            id="ucla-vid"
            loop={true}
            autoPlay={true}
            playsInline={true}
            muted={true}
          >
            <source
              src="https://player.vimeo.com/progressive_redirect/download/813254705/rendition/source/23su_homepage_video%20%28Original%29.mp4?loc=external&amp;signature=b1674566f5648d14519a222a264136a22ceecc3c67557af30101b6bdf3b44f4c"
              type="video/mp4"
            />
            <source
              src="/themes/unex/images/148300_21sp_inst_homepage_v15.mp4"
              type="video/mp4"
            />
          </video> */}
        </div>
      </div>
    </section>
  );
};
