import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import AboutComponent from "../components/about";

import ContactForm from "../components/contact";

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <AboutComponent />
      <ContactForm />
    </Layout>
  );
}
