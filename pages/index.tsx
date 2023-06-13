import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import DateFormat from "../components/date";
import HeadlineAnimation from "../components/headline-animation";
import CardContainer from "../components/cards/card-container";
import { FeatureItem } from "../components/feature-item";
import ContactForm from "../components/contact";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <HeadlineAnimation />
      </section>
      <section>
        <CardContainer />
      </section>

      <section>
        <FeatureItem
          title="Defending Intellectual Freedom"
          content="A highly-accessible site that features intuitive user pathways to help informatoin professoinals and communities combat censorship."
          link="/websites/ffany"
          videoUrl="https://embed-ssl.wistia.com/deliveries/405b909f1776ba722fdbba200ee8fca834d62ede/file.mp4"
          siteUrl="https://freeforallny.org/"
        />
      </section>

      <section>
        <FeatureItem
          title="A Professional Painter's Portfolio"
          content="Subtle animation elements, clean design, and robust SEO content provide a site to bolster business."
          link="google.com"
          videoUrl="https://embed-ssl.wistia.com/deliveries/7f7ab82fbbffb91bc1bd4cb45ebbf68c427b11e8/file.mp4"
          siteUrl="https://thomsenpainting.com/"
        />
      </section>

      <ContactForm />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
