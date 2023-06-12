import { useEffect, useRef, useState } from "react";
import {
  useSpring,
  animated,
  useTrail,
  useIsomorphicLayoutEffect,
} from "@react-spring/web";

import styles from "./headline-animation.module.css";
import localFont from "next/font/local";

const cloudFont = localFont({ src: "../pages/cloudstorm.woff2" });

export default function HeadlineAnimation({}) {
  const [width, setWidth] = useState(0);
  const [headlineTop, setHeadlineTop] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const headlines = [
    "Your Wingman for Websites",
    "Clear Skies Ahead for Your New Website",
    "Websites to Help Your business Take Off",
  ];

  const [headline, setHeadline] = useState(headlines[0]);
  const ref = useRef(null);

  useEffect(() => {
    setHeadlineTop(ref.current.offsetTop);
    setWidth(ref.current.offsetWidth);
    setWindowWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    writerPlaneAnimation();
  }, [headlineTop, headline]);

  const animationDuration = 1500;

  const headlineUpdate = () => {
    const headlineIndex = headlines.indexOf(headline);
    if (headlineIndex >= headlines.length - 1) {
      setHeadline(headlines[0]);
    } else {
      setHeadline(headlines[headlineIndex + 1]);
    }
  };

  const [writerPlane, writerPlaneApi] = useSpring(() => ({
    from: { x: "-60vw", y: "0vw" },
    config: {
      duration: animationDuration,
    },
  }));

  const writerPlaneAnimation = () => {
    writerPlaneApi.start({
      from: {
        x: "-60vw",
        y: (headlineTop - 75).toString(),
      },
      to: [
        { x: "-30vw", y: (headlineTop - 65).toString() },
        { x: "0vw", y: (headlineTop - 75).toString() },
        { x: "30vw", y: (headlineTop - 65).toString() },
        { x: "60vw", y: (headlineTop - 75).toString() },
      ],
    });
  };

  const [backPlane, backPlaneApi] = useSpring(() => ({
    from: { x: "-60vw", y: "0vw" },
    config: {
      duration: animationDuration * 3,
    },
  }));

  backPlaneApi.start({
    from: {
      x: "-60vw",
      y: (headlineTop + 110).toString(),
    },
    delay: 1000,

    to: [
      { x: "-30vw", y: (headlineTop + 120).toString() },
      { x: "0vw", y: (headlineTop + 110).toString() },
      { x: "30vw", y: (headlineTop + 120).toString() },
      { x: "60vw", y: (headlineTop + 110).toString() },
    ],
  });

  const [trail, headlineApi] = useTrail(headline.length, () => ({
    from: { y: "0.5vw", opacity: 0, scale: 0.15 },
    config: {
      duration: 135,
    },
  }));

  useIsomorphicLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setWindowWidth(window.innerWidth);

    headlineApi.start({
      from: { y: "0.5vw", opacity: 0, scale: 0.15 },
      to: async (next, cancel) => {
        await next({
          y: "0.5vw",
          opacity: 0,
          scale: 0.25,
          delay: Math.floor(
            ((windowWidth - width) / windowWidth) * 2.5 * animationDuration
          ),
        });
        await next({
          y: "0vw",
          opacity: 0.3,
          scale: 0.5,
        });
        await next({
          y: "0vw",
          opacity: 1,
          scale: 1,
          config: { friction: 100 },
        });
        await next({
          y: "0vw",
          opacity: 1,
          scale: 1,
          delay: 3500,
        });
        await next({
          y: "-0.75vw",
          opacity: 0,
          scale: 1.25,
          delay: 500,
        });
        await next({
          y: "-0.75vw",
          opacity: 0,
          scale: 1.35,
          config: { friction: 20 },
          delay: 1500,
        });
        await next({
          y: "-1vw",
          opacity: 0,
          scale: 0,
          delay: 1000,
        });
        await next({
          onResolve: () => headlineUpdate(),
        });
      },
    });
  }, [width, headline]);

  const topCloudAnimation = useSpring({
    config: { friction: 500 },
    from: { opacity: 0, x: "0vw" },
    to: [
      { opacity: 1, x: "10vw" },
      { opacity: 0, x: "20vw" },
    ],
    loop: true,
  });

  const bottomCloudAnimation = useSpring({
    config: { friction: 500 },
    from: { opacity: 0, x: "-40vw", y: "20px" },
    delay: 2500,
    to: [
      { opacity: 1, x: "-20vw", y: "35px" },
      { opacity: 1, x: "-30vw", y: "20px" },
      { opacity: 0, x: "-40vw", y: "20px" },
    ],
    loop: true,
  });

  return (
    <div className={styles.skywrapper}>
      <animated.img
        className={styles.writerplane}
        src="/images/paper-airplane.png"
        style={{
          ...writerPlane,
        }}
      />

      <h3 ref={ref} className={styles.skyheadline}>
        {trail.map(({ y, scale, opacity, ...style }, index) => (
          <animated.span
            key={index + headline[index]}
            className={cloudFont.className}
            style={{ scale, y, opacity }}
          >
            {headline[index]}
          </animated.span>
        ))}
      </h3>

      <animated.img
        className={styles.backplane}
        src="/images/paper-airplane.png"
        style={{
          ...backPlane,
        }}
      />

      <animated.img
        className={styles.topcloud}
        src="/images/cloud.png"
        style={{
          ...topCloudAnimation,
        }}
      />

      <animated.img
        className={styles.bottomcloud}
        src="/images/cloud.png"
        style={{
          ...bottomCloudAnimation,
        }}
      />
    </div>
  );
}
