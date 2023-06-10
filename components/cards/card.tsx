export default function Card(props: {
  color: string;
  title: string;
  description: string;
  svgPath: string[];
}) {
  return (
    <div>
      <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div
          className={`h-28 overflow-hidden rounded-t-lg ${props.color}`}
        ></div>
        <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="p-3 -rotate-1"
          >
            {props.svgPath.map((path) => {
              return <path fill-rule="evenodd" clip-rule="evenodd" d={path} />;
            })}
          </svg>
        </div>
        <div className="p-6">
          <h4 className="mb-4 text-2xl font-semibold">{props.title} </h4>
          <hr />

          <p className="mt-4">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
