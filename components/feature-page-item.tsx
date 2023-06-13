import React, { useEffect, useRef } from "react";
import Link from "next/link";
export const FeaturePageItem = (props: {
  title: string;
  subtitle: string;
  content: string;
  videoUrl?: string;
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
    <section className="bg-white">
      <div className="w-full bg-pd-blue place-self-center lg:col-span-7">
        <div className="max-w-screen-xl px-4 mx-auto w-full bg-pd-blue place-self-center lg:col-span-7">
          <h1 className="text-white max-w-2xl pt-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            {props.title}
          </h1>
          <h3 className="text-white max-w-2xl pb-4 text-xl font-extrabold tracking-tight leading-none md:text-2xl  ">
            {props.subtitle}
          </h3>
        </div>
      </div>
      <div className="grid max-w-screen-xl px-4 pt-8 pb-20 mx-auto gap-10 lg:gap-20 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6 ">
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {props.content}
          </p>

          <a
            href={props.siteUrl}
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-bold text-center text-white rounded-lg bg-pd-blue focus:ring-4 focus:ring-primary-300 hover:scale-105 duration-500 transition-all hover:bg-pd-blue-dark hover:no-underline"
          >
            Live Site
            <svg
              className="w-4 h-4 ml-2 -mr-1 -mt-2"
              fill="currentColor"
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
        {props.videoUrl && (
          <div className="span-12 lg:mt-0 lg:col-span-6 lg:flex">
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
        )}
      </div>
    </section>
  );
};
