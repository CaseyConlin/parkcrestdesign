import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import ContactForm from "../components/contact";
import { FeatureItem } from "../components/feature-item";

export default function Websites() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="w-full bg-pd-blue place-self-center lg:col-span-7">
        <div className="max-w-screen-xl px-4 mx-auto w-full bg-pd-blue place-self-center lg:col-span-7">
          <h1 className="text-white pb-2 max-w-2xl pt-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            Websites
          </h1>
          <h3 className="text-white max-w-2xl pb-4 text-xl  tracking-loose  md:text-md  ">
            We bring your vision to life by providing guidance and working with
            you collaboratively to create an experience that will delight your
            customers and deliver something you will be proud to have represent
            your business. Our websites employ best practice in search engine
            optimization and design to strengthen your relationships with
            existing patrons and create connections with new customers.
          </h3>
        </div>
      </div>
      <FeatureItem
        title="FFANY"
        content="User Experience for Resources to Combat Censorship"
        link="websites/freeforallny.org/"
        videoUrl="https://embed-ssl.wistia.com/deliveries/405b909f1776ba722fdbba200ee8fca834d62ede/file.mp4"
        siteUrl="https://freeforallny.org/"
        bgColor="bg-slate-200"
      />
      <FeatureItem
        title="Thomsen Painting"
        content="A Portfolio for a Professional Painter"
        link="websites/thomsenpainting.com/"
        videoUrl="https://embed-ssl.wistia.com/deliveries/7f7ab82fbbffb91bc1bd4cb45ebbf68c427b11e8/file.mp4"
        siteUrl="https://thomsenpainting.com/"
      />
      <FeatureItem
        title="Stone Ridge Library Calendar"
        content="A Modern Calendar to Highlight Library Events"
        link="websites/stoneridgelibrary.org/events/"
        videoUrl="https://embed-ssl.wistia.com/deliveries/a70d0138fa56efff52e97209cfe36091b692c8b4/file.mp4"
        siteUrl="https://stoneridgelibrary.org/events/"
        bgColor="bg-slate-200"
      />
      <FeatureItem
        title="The Shed Haus"
        content="Powerful SEO and Quick Customer Connections"
        link="websites/theshedhaus.com/"
        videoUrl="https://embed-ssl.wistia.com/deliveries/d1019a7e4c510590fca05fa2d9123af4f8d9b519/file.mp4"
        siteUrl="https://theshedhaus.com/"
      />
      <FeatureItem
        title="Sissys Cafe"
        content="To the Point with a POS Integration"
        link="websites/sissyscafekingston.com/"
        videoUrl="https://embed-ssl.wistia.com/deliveries/5c26645ff37d03e193e44b3ac9204595fc27ef8b/file.mp4"
        siteUrl="https://sissyscafekingston.com/"
        bgColor="bg-slate-200"
      />
      <FeatureItem
        title="ABC Pools & Spas"
        content="Making a Splash with SEO and a Mobile-responsive Site"
        videoUrl="https://embed-ssl.wistia.com/deliveries/a4255e54d029cd269f8ea9bcf7ee6bd8fadd4f05/file.mp4"
        siteUrl="https://abcpoolandspaservice.com/"
        link="websites/abcpools"
      />

      <ContactForm />
    </Layout>
  );
}
