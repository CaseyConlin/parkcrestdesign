import Head from "next/head";
import styles from "./layout.module.css";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "./footer";
import Modal from "./modal";

// const name = "Casey Conlin";
export const siteTitle = "Parkcrest Design";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const [isModalOpeon, setIsModalOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Parkcrest Design offers complete webpages and web development support as well as print materials to support businesses and nonprofits."
        />
        <meta
          property="og:image"
          content="/images/parkcrest_design_logo_black.svg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {isModalOpeon && <Modal closeModal={() => setIsModalOpen(false)} />}
      <Navbar
        openModal={() => {
          setIsModalOpen(true);
        }}
      />
      <header></header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
