import { useSpring, useInView } from "@react-spring/web";
import { Card } from "./card";

export default function CardContainer() {
  const [rocketRef, isRocketInView] = useInView({
    rootMargin: "-45% 0px -45% 0px",
    amount: 0,
  });

  const rocketAppear = useSpring({
    y: isRocketInView ? 0 : 75,
    x: isRocketInView ? 0 : -75,
    config: {
      tension: 280,
      friction: 20,
      mass: 5,
    },
  });

  const [smileRef, isSmileInView] = useInView({
    rootMargin: "-45% 0px -45% 0px",
    amount: 0,
  });

  const smileAppear = useSpring({
    rotate: isSmileInView ? 0 : 180,
    config: {
      tension: 280,
      friction: 25,
      mass: 5,
    },
    delay: 500,
  });

  const [chatRef, isChatInView] = useInView({
    rootMargin: "-45% 0px -45% 0px",
    amount: 0,
  });

  const chatAppear = useSpring({
    y: isChatInView ? 0 : 100,
    scale: isChatInView ? 1 : 0,
    config: {
      tension: 200,
      friction: 12,
    },
    delay: 750,
    mass: 25,
  });

  return (
    <section className="text-neutral-700  mx-2 md:mx-10 my-10">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl font-bold">What We're About</h3>

        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
          We help businesses and organizations connect with their customers
          through great websites and digital and print materials.
        </p>
      </div>

      <div className="grid gap-10 text-center md:grid-cols-3">
        <Card
          ref={rocketRef}
          animation={rocketAppear}
          color="bg-pd-green"
          title="Great Products & Results"
          description="Our websites and digital and print promotional and informational materials employ best practice in search engine optimization and design to strengthen your relationships with existing customers and create new connections."
          svgPath={[
            "M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z",
            "M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z",
          ]}
        />
        <Card
          ref={smileRef}
          animation={smileAppear}
          color="bg-pd-blue"
          title="Friendly Development"
          description="We bring your vision to life by providing guidance and working with you collaboratively to create an experience that will delight your customers and deliver something you will be proud to have represent your business."
          svgPath={[
            "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z",
          ]}
        />
        <Card
          animation={chatAppear}
          color="bg-pd-green"
          title="Responsive Support"
          description="Your business and your reputation are important, so we provide quick service for creation, maintenance, and updating your websites and digital and print materials to help you build trust with your customers through up-to-date and reliable information."
          svgPath={[
            "M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z",
            "M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z",
          ]}
          ref={chatRef}
        />
      </div>
    </section>
  );
}
