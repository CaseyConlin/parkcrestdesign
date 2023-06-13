import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { FeaturePageItem } from "../../components/feature-page-item";
import ContactForm from "../../components/contact";

export default function Thomsenpainting() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FeaturePageItem
        title="Thomsen Painting"
        subtitle="A Portfolio for a Professional Painter"
        content="Thomsen Painting's website provides a polished digital presence that matches and highlights the business’s extensive work and expertise in interior and exterior painting, as well as hardwood furniture and historical property restoration. The site features subtle animation elements custom-developed to match branding coupled with a clean look that allows visitors to easily navigate the site and find the services available from Thomsen Painting. The navigation and site structure also provide SEO benefits as search engine crawlers can easily index and surface the site using keywords and structure  in portfolio categories and portfolio projects listed on the site. The site also features an up-to-date feed for Thomsen’s Paintings healthy and engaging Instagram profile. The site uses the WordPress CMS to allow easy editing of the site content and pages."
        videoUrl="https://embed-ssl.wistia.com/deliveries/7f7ab82fbbffb91bc1bd4cb45ebbf68c427b11e8/file.mp4"
        siteUrl="https://thomsenpainting.com/"
      />
      <ContactForm />
    </Layout>
  );
}
