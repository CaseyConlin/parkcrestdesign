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
          content="From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack."
          link="google..com"
          videoUrl="https://embed-ssl.wistia.com/deliveries/405b909f1776ba722fdbba200ee8fca834d62ede/file.mp4"
        />
      </section>

      <section>
        <FeatureItem
          title="Defending Intellectual Freedom"
          content="From checkout to global sales tax compliance, companies around the
          world use Flowbite to simplify their payment stack."
          link="google.com"
          videoUrl="https://embed-ssl.wistia.com/deliveries/7f7ab82fbbffb91bc1bd4cb45ebbf68c427b11e8/file.mp4"
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
