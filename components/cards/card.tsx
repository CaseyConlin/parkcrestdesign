import { forwardRef } from "react";
import {
  useSpring,
  animated,
  useTrail,
  useIsomorphicLayoutEffect,
} from "@react-spring/web";

export const Card = forwardRef(function Card(
  props: {
    color: string;
    title: string;
    description: string;
    svgPath: string[];
    animation: {};
  },
  ref: any
) {
  return (
    <div>
      <div
        ref={ref}
        key={props.title + props.color}
        className="block border-slate-300 border rounded-lg bg-white shadow-lg "
      >
        <div
          className={`h-28 overflow-hidden rounded-t-lg ${props.color}`}
        ></div>
        <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white ">
          <animated.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-24 h-24 p-3 -rotate-1"
            style={props.animation}
          >
            {props.svgPath.map((path) => {
              return (
                <path
                  key={path.slice(5, 20)}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={path}
                />
              );
            })}
          </animated.svg>
        </div>
        <div className="p-6">
          <h4 className="mb-4 text-2xl font-semibold">{props.title} </h4>
          <hr />

          <p className="mt-4">{props.description}</p>
        </div>
      </div>
    </div>
  );
});
