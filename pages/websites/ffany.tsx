import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { FeaturePageItem } from "../../components/feature-page-item";
import ContactForm from "../../components/contact";

export default function Ffany() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FeaturePageItem
        title="FFANY"
        subtitle="User Experience for Resources to Combat Censorship"
        content="Free For All: New Yorkers for Intellectual Freedom is an organization committed to supporting intellectual freedom by providing resources to combat censorship to library professionals and community members. The site provides animation and layout for an engaging experience that draws visitors in, with intuitive pathways and a mega menu to guide visitors to content to meet their goals, and SEO-friendly composition and descriptions ensure organic reach for the site. The site is mobile-responsive, and includes structural and design elements that create a more accessible experience for people of all abilities including size, layout, and contrast to meet WCAG and reduced motion settings based on user local settings. User experience and SEO are further boosted by the site’s fast load time as measured by Lighthouse at 99 for desktop performance and 94 on mobile. The site uses the WordPress CMS to allow easy editing to the site content and pages.  "
        videoUrl="https://embed-ssl.wistia.com/deliveries/405b909f1776ba722fdbba200ee8fca834d62ede/file.mp4"
        siteUrl="https://freeforallny.org/"
      />
      <ContactForm />
    </Layout>
  );
}
