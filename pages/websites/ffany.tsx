import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import Link from "next/link";
import HeadlineAnimation from "../../components/headline-animation";
import ContactForm from "../../components/contact";

export default function Ffany() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <ContactForm />
    </Layout>
  );
}
