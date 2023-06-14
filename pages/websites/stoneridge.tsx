import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { FeaturePageItem } from "../../components/feature-page-item";
import ContactForm from "../../components/contact";

export default function Stoneridge() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FeaturePageItem
        title="Stone Ridge Library Calendar"
        subtitle="A Modern Calendar to Highlight Library Events"
        content="The Stone Ridge Library’s calendar features a mobile-first design and layout with desktop views and interfaces to facilitate staff tasks related to searching for and registering library users for events. The site allows users to easily search for events by keyword, date, and audience, and provides event information presented according to Google’s structured data schema to support SEO discovery of events. Users searching areas and events in areas are presented with the library’s events thanks to this structured data. Users register for online and in-person events on the calendar and receive reminder emails, and library staff receive information about registration by email and up-to-date info is available on the WordPress backend of the website."
        videoUrl="https://embed-ssl.wistia.com/deliveries/a70d0138fa56efff52e97209cfe36091b692c8b4/file.mp4"
        siteUrl="https://stoneridgelibrary.org/events/"
      />
      <ContactForm />
    </Layout>
  );
}
