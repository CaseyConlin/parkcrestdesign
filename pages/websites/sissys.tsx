import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { FeaturePageItem } from "../../components/feature-page-item";
import ContactForm from "../../components/contact";

export default function Sissyscafe() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FeaturePageItem
        title="Sissys Cafe"
        subtitle="To the Point with a POS Integration"
        content="Questions about restaurants usually center around hours, menu, and ordering, and the website for Sissy’s Cafe allows the information people are looking for to come to the surface. The site’s main call-to-action focuses on connecting folks to the point-of-sale integration to order food, which results in the cafe getting orders (and revenue) and visitors getting food (and less hungry) for a win-win situation. Folks looking for more background and up-to-date info on Sissy’s, an institution with its own story in Kingston’s Stockade District, will find this in the business’s about page, and the live Instagram feed."
        videoUrl="https://embed-ssl.wistia.com/deliveries/7f7ab82fbbffb91bc1bd4cb45ebbf68c427b11e8/file.mp4"
        siteUrl="https://sissyscafekingston.com/"
      />
      <ContactForm />
    </Layout>
  );
}
