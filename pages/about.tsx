import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import ContactForm from "../components/contact";

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <ContactForm />
    </Layout>
  );
}
