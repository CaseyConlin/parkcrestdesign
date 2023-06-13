import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { FeaturePageItem } from "../../components/feature-page-item";
import ContactForm from "../../components/contact";

export default function Rosendalecafe() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <FeaturePageItem
        title="Rosendale Cafe"
        subtitle="Venue? Restaurant? Both."
        content="Since closed in the wake of COVID, one of the oldest businesses in our small town, the Rosendale Cafe served not only great vegetarian fare, but live music, and a sense of community. Their new website provided an updated look with mobile-responsive pages relevant to the restaurant and an integrated calendar to highlight their many music events and community gatherings that took place at the restaurant. The migration of the site included moving more than 1,500 events to a new server to preserve the page’s existing strong SEO and historical significance. Calendar events were integrated with MailChimp newsletter feeds to provide weekly marketing emails of featured events."
        siteUrl="https://rosendalecafe.com/"
      />
      <ContactForm />
    </Layout>
  );
}
