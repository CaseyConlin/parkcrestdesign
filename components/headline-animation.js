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
  const [headlineTop, setHeadlineTop] = useState();
  const [windowWidth, setWindowWidth] = useState();

  const headlines = [
    "Your Wingman for Websites",
    "Clear Skies Ahead for Your New Website",
    "Websites to Help Your business Take Off",
  ];

  const [headline, setHeadline] = useState(headlines[0]);
  const ref = useRef(null);

  const writeAnimationDuration = 6;
  const writeAnimationReplayDelay = 5;

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

  const [writerPlane, writerPlaneApi] = useSpring(() => ({
    from: { x: "0vw", y: "0vw" },
    config: {
      duration: animationDuration,
    },
  }));
  const writerPlaneAnimation = () => {
    writerPlaneApi.start({
      from: {
        x: "-60vw",
        y: headlineTop / 2 - 75,
        rotate: "-20deg",
      },
      to: [
        { x: "-30vw", y: headlineTop / 2 - 105 },
        { x: "0vw", y: headlineTop / 2 - 95 },
        { x: "30vw", y: headlineTop / 2 - 105 },
        { x: "60vw", y: headlineTop / 2 - 95 },
      ],
    });
  };

  const [trail, headlineApi] = useTrail(headline.length, () => ({
    config: {
      duration: 135,
    },

    from: { y: "0.5vw", opacity: 0, scale: 0.15 },
  }));

  useIsomorphicLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setWindowWidth(window.innerWidth);
    console.log(
      Math.floor(
        ((windowWidth - width) / windowWidth) * 3.75 * animationDuration
      )
    );

    headlineApi.start({
      from: { y: "0.5vw", opacity: 0, scale: 0.15 },
      to: [
        {
          y: "0.5vw",
          opacity: 0,
          scale: 0.25,

          delay: Math.floor(
            ((windowWidth - width) / windowWidth) * 2.5 * animationDuration
          ),
        },
        { y: "0vw", opacity: 0.3, scale: 0.5 },
        {
          y: "0vw",
          opacity: 1,
          scale: 1,
          config: { friction: 100 },
        },
        {
          y: "0vw",
          opacity: 1,
          scale: 1,
          delay: 3500,
        },

        {
          y: "-0.75vw",
          opacity: 0,
          scale: 1.25,
          delay: 500,
        },
        {
          y: "-0.75vw",
          opacity: 0,
          scale: 1.35,
          config: { friction: 20 },
          delay: 1500,
        },
        { y: "-1vw", opacity: 0, scale: 0, delay: 1000 },
        () => {
          const headlineIndex = headlines.indexOf(headline);
          if (headlineIndex >= headlines.length - 1) {
            setHeadline(headlines[0]);
          } else {
            setHeadline(headlines[headlineIndex + 1]);
          }
        },
      ],
    });
  }, [width, headline]);

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
    </div>
  );
}
