import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "./404.module.css";
import localFont from "next/font/local";
const cloudFont = localFont({ src: "../pages/cloudstorm.woff2" });

import ContactForm from "../components/contact";

export default function Custom404() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h1 className={"block text-6xl font-extrabold p-10 pt-20 text-center"}>
        404
      </h1>
      <div
        className={`bg-pd-blue justify-center content-center mt-28 mb-36 h-auto text-white text-center ${styles.skyheadline}`}
      >
        <h2 className={`text-lg py-10 px-24 ${cloudFont.className}`}>
          <span className={` ${cloudFont.className}`}>
            Oof... theres no page at this address.
            <br /> Try navigating from the menu or reach out if you have a
            question.
          </span>
        </h2>
      </div>

      <ContactForm />
    </Layout>
  );
}
