import React, { useEffect, useRef } from "react";
import Link from "next/link";
export const FeatureItem = (props: {
  title: string;
  content: string;
  link: string;
  videoUrl: string;
  siteUrl: string;
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

          <Link
            href={props.link}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-bold text-center text-black rounded-lg bg-pd-green focus:ring-4 focus:ring-primary-300 hover:scale-105 duration-500 transition-all hover:bg-pd-green-dark hover:no-underline"
          >
            Learn More
            <svg
              className="w-6 h-6 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18v-4h-7v-4h7v-4l6 6-6 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <a
            href={props.siteUrl}
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:no-underline hover:scale-105 duration-500 transition-all"
          >
            Live Site
            <svg
              className="w-4 h-4 ml-2 -mr-1 -mt-2"
              fill="currentColor"
              style={{ transform: "" }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                clipRule="evenodd"
              ></path>
            </svg>
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
        </div>
      </div>
    </section>
  );
};
