import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import DateFormat from "../components/date";
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import {
  useSpring,
  animated,
  useTrail,
  easings,
  useTransition,
  useIsomorphicLayoutEffect,
} from "@react-spring/web";

import {
  motion,
  useMotionValueEvent,
  useMotionValue,
  useAnimationControls,
  useAnimate,
  delay,
} from "framer-motion";
import styles from "./index.module.css";
import localFont from "next/font/local";

const cloudFont = localFont({ src: "./cloudstorm.woff2" });

const randomIndexNumber = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

export default function Home({ allPostsData }) {
  // useEffect(() => {
  //   const plane = new Image();
  //   function init() {
  //     plane.src = "/images/paper-airplane.png";
  //     window.requestAnimationFrame(draw);
  //   }
  //   var requestAnimationFrame =
  //     window.requestAnimationFrame ||
  //     window.mozRequestAnimationFrame ||
  //     window.webkitRequestAnimationFrame ||
  //     window.msRequestAnimationFrame;

  //   function draw() {
  //     const ctx = document.getElementById("myCanvas").getContext("2d");
  //     ctx.fillStyle = "rgba(135, 206, 235, 1)";
  //     ctx.fillRect(0, 0, ctx.width, ctx.height);
  //     let planex = 40;
  //     const planey = 50;

  //     ctx.globalCompositeOperation = "destination-under";

  //     ctx.save();

  //     // Earth

  //     ctx.fillRect(0, 20, 500, 200); // Shadow

  //     ctx.drawImage(plane, planex, planey, 100, 100);

  //     planex += 1;
  //     requestAnimationFrame(draw);
  //   }

  //   init();
  // }, []);
  // let ref = useRef();
  // const getPixelRatio = (context) => {
  //   var backingStore =
  //     context.backingStorePixelRatio ||
  //     context.webkitBackingStorePixelRatio ||
  //     context.mozBackingStorePixelRatio ||
  //     context.msBackingStorePixelRatio ||
  //     context.oBackingStorePixelRatio ||
  //     context.backingStorePixelRatio ||
  //     1;

  //   return (window.devicePixelRatio || 1) / backingStore;
  // };
  // useEffect(() => {
  //   let canvas = ref.current;
  //   let context = canvas.getContext("2d");

  //   let ratio = getPixelRatio(context);
  //   let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
  //   let height = getComputedStyle(canvas)
  //     .getPropertyValue("height")
  //     .slice(0, -2);

  //   canvas.width = width * ratio;
  //   canvas.height = height * ratio;
  //   canvas.style.width = `${width}px`;
  //   canvas.style.height = `${height}px`;

  //   let requestId;
  //   let i = 100;
  //   const render = () => {
  //     console.log(i);
  //     context.beginPath();
  //     context.arc(
  //       canvas.width / 2,
  //       canvas.height / 2,
  //       (canvas.width / 2) * Math.abs(Math.cos(i)),
  //       0,
  //       2 * Math.PI
  //     );
  //     context.fill();
  //     i += 0.05;
  //     requestId = requestAnimationFrame(render);
  //   };
  //   render();
  //   return () => {
  //     cancelAnimationFrame(requestId);
  //   };
  // }, []);
  // const canvasRef = useRef(null);
  // const requestIdRef = useRef(null);
  // const ballRef = useRef({ x: 50, y: 50, vx: 3.9, vy: 3.3, radius: 20 });
  // const size = { width: 400, height: 250 };

  // function frameRenderer(size, ball) {
  //   this.clearRect(0, 0, size.width, size.height);

  //   const drawCircle = (x, y, radius, color, alpha) => {
  //     this.save();
  //     this.beginPath();
  //     this.arc(x, y, radius, 0, Math.PI * 2);
  //     this.fillStyle = color;
  //     this.globalAlpha = alpha;
  //     this.fill();
  //     this.closePath();
  //     this.restore();
  //   };

  //   drawCircle(ball.x, ball.y, ball.radius, "#444");
  // }

  // const updateBall = () => {
  //   const ball = ballRef.current;
  //   ball.x += ball.vx;
  //   ball.y += ball.vy;
  //   if (ball.x + ball.radius >= size.width) {
  //     ball.vx = -ball.vx;
  //     ball.x = size.width - ball.radius;
  //   }
  //   if (ball.x - ball.radius <= 0) {
  //     ball.vx = -ball.vx;
  //     ball.x = ball.radius;
  //   }
  //   if (ball.y + ball.radius >= size.height) {
  //     ball.vy = -ball.vy;
  //     ball.y = size.height - ball.radius;
  //   }
  //   if (ball.y - ball.radius <= 0) {
  //     ball.vy = -ball.vy;
  //     ball.y = ball.radius;
  //   }
  // };

  // const renderFrame = () => {
  //   const ctx = canvasRef.current.getContext("2d");
  //   updateBall();
  //   frameRenderer.call(ctx, size, ballRef.current);
  // };

  // const tick = () => {
  //   if (!canvasRef.current) return;
  //   renderFrame();
  //   requestIdRef.current = requestAnimationFrame(tick);
  // };

  // useEffect(() => {
  //   requestIdRef.current = requestAnimationFrame(tick);
  //   return () => {
  //     cancelAnimationFrame(requestIdRef.current);
  //   };
  // }, []);
  const controls = useAnimationControls();

  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const [end, setEnd] = useState(0);
  const [headlineTop, setHeadlineTop] = useState();
  const [windowWidth, setWindowWidth] = useState();

  const [scope, animate] = useAnimate();

  const headlines = [
    // "Your Wingman for Websites1",
    // "Your Wingman for Websites2",
    // "Your Wingman for Websites3",
    "Your Wingman for Websites",
    "Clear Skies Ahead for Your New Website",
    "Websites to Help Your business Take Off",
  ];

  const [headline, setHeadline] = useState(
    headlines[0]
    // headlines[randomIndexNumber(headlines)]
  );
  const ref = useRef(null);

  const writeAnimationDuration = 6;
  const writeAnimationReplayDelay = 5;

  // animate={{
  //   x: ["-55vw", "60vw"],
  //   y: ["8vw", "9vw", "8vw", "9vw", "8vw"],
  //   rotate: ["-20deg", "-15deg", "-10deg", "-15deg", "-5deg"],
  // }}
  // transition={{
  //   duration: 8,
  //   easing: "linear",
  //   times: [0, 0.2, 0.5, 0.8, 1],
  //   repeat: Infinity,
  //   repeatDelay: 1,
  // }}

  // const letter = {
  //   hidden: { opacity: 0, y: 10 },
  //   visible: {
  //     opacity: [0, 1, 1, 0],
  //     scale: [0.2, 1, 1, 1],
  //     y: ["2vh", "-1vh", "-1vh", "-2vh"],
  //   },
  // };
  // const x = useMotionValue(1);
  // useEffect(() => {

  //     setLeft(ref.current.offsetLeft);
  //     setWidth(ref.current.offsetWidth);
  //     setEnd(window.outerWidth);
  //     console.log("hey");
  //     console.log(headline);

  // }, [headline]);

  useEffect(() => {
    setHeadlineTop(ref.current.offsetTop);
    setWidth(ref.current.offsetWidth);
    setWindowWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    // headlineAnimation();
    setWidth(ref.current.offsetWidth);
    writerPlaneAnimation();
  }, [headlineTop, headline]);

  // console.log(left + "left");
  // console.log(width + "width");

  // x.set(width);

  // console.log(x.get());

  // const sentence = {
  //   hidden: { opacity: 1 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: headline.length / 5,
  //       // ...(width && { delayChildren: width * 10 }),
  //       staggerChildren: 0.095,
  //     },
  //   },
  // };
  const animationDuration = 1500;

  const [writerPlane, writerPlaneApi] = useSpring(() => ({
    from: { x: "0vw", y: "0vw" },
    config: {
      duration: animationDuration,
    },
  }));
  const writerPlaneAnimation = () => {
    // const headlineVw = Math.floor((100 * headlineTop) / windowWidth);

    writerPlaneApi.start({
      // loop: true,
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
        // { x: left, y: "4vw" },
        // { x: (left + width) / 2, y: "5.0vw" },
        // { x: width + left, y: "4.5vw" },
        // { x: end, y: "2.5vw" },
        // useCallback(async () => {
        //   setHeadline(
        //     headlines[[Math.floor(Math.random() * headlines.length)]]
        //   );
        // }, []),
      ],
    });
  };

  // const [trail, letterApi] = useTrail(headline.length, () => ({
  //   x: 0,
  // }));

  const [trail, headlineApi] = useTrail(headline.length, () => ({
    config: {
      // duration: headline.length,
      // duration: headline.length * 7,
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

      // useCallback(async () => {
      //   let headlineIndex = headlines.indexOf(headline);
      //   console.log(headlineIndex + 1);
      //   console.log(headlines.length);

      //   // headlines[[Math.floor(Math.random() * headlines.length)]]
      //   if (headlineIndex < headlines.length - 1) {
      //     setHeadline(headlines[headlineIndex + 2]);
      //   } else {
      //     console.log(headlines[0]);
      //     setHeadline(headlines[0]);
      //   }
      // }, []),
      // ],
    });
  }, [width, headline]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <canvas {...size} ref={canvasRef} /> */}
        {/* <canvas
          id="myCanvas"
          width="500"
          height="500"
          style={{ border: "1px solid #d3d3d3" }}
        >
          Your browser does not support the HTML canvas tag.
        </canvas> */}

        <p>[Your Self Introduction]</p>
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
          {/* {trail.map(({ x }, i) => (
              <span
                className={cloudFont.className}
                key={i}
                style={{
                  transform: x.to(
                    (val) => `perspective(600px) rotateX(${180 - val}deg)`
                  ),
                  transformStyle: "preserve-3d",
                }}
              >
                {headline[i]}
              </span>
            ))} */}

          {/* <motion.h3
            ref={scope}
            className={styles.skyheadline}
            variants={sentence}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => {
              console.log(headline);
              setHeadline(headlines[1]);
            }}
          >
            {headline.split("").map((char, index) => {
              return (
                <motion.span
                  className={cloudFont.className}
                  key={char + "-" + index}
                  variants={letter}
                  transition={{
                    duration: writeAnimationDuration,
                    repeat: Infinity,
                    times: [0, 0.2, 0.9, 1],
                    repeatDelay: writeAnimationReplayDelay,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h3>
          <motion.img
            className={styles.writerplane}
            src="/images/paper-airplane.png"
            // initial={{ y: "10vh", x: "-25vw" }}
            // animate={{ y: "5vh", x: "10vw" }}
            // transition={{ duration: 5 }}
            animate={{
              x: ["-60vw", "60vw"],
              y: ["9.5vw", "11.5vw", "9.5vw", "11.5vw", "9.5vw"],
              rotate: ["-20deg", "-15deg", "-10deg", "-15deg", "-5deg"],
            }}
            transition={{
              duration: writeAnimationDuration,
              easing: "linear",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: writeAnimationReplayDelay,
            }}
          /> */}
        </div>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <DateFormat dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
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
