import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { FeaturePageItem } from "../../components/feature-page-item";
import ContactForm from "../../components/contact";
export default function Abcpools() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FeaturePageItem
        title="ABC Pools & Spas"
        subtitle="Making a Splash with SEO and a Mobile-responsive Site"
        content="Their website helps customers find and hire ABC Pools & Spas for pool installations, service, and maintenance. Search Engine Optimization including fast load times for mobile devices puts their web page higher in search results. And contact forms and information connect customers easily to the business. Photos of ABC Pools' work show customers they can trust them to get the job done right."
        videoUrl="https://embed-ssl.wistia.com/deliveries/a4255e54d029cd269f8ea9bcf7ee6bd8fadd4f05/file.mp4"
        siteUrl="https://abcpoolandspaservice.com/"
      />
      <ContactForm />
    </Layout>
  );
}
