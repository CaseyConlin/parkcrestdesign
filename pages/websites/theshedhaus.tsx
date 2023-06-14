import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { FeaturePageItem } from "../../components/feature-page-item";
import ContactForm from "../../components/contact";

export default function Theshedhaus() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FeaturePageItem
        title="The Shed Haus"
        subtitle="Powerful SEO and Quick Customer Connections"
        content="Updates to The Shed Haus website keep content fresh, and upgrades to the metadata in the site’s structure by Parkcrest Design help these sheds and products rise in search results. The Shed Haus website features a robust online storefront with inventory, an Instagram slider with automatically updated posts, and a Facebook chat widget to connect with customers faster."
        videoUrl="https://embed-ssl.wistia.com/deliveries/d1019a7e4c510590fca05fa2d9123af4f8d9b519/file.mp4"
        siteUrl="https://theshedhaus.com/"
      />
      <ContactForm />
    </Layout>
  );
}
