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
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
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
