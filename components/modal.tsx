import styles from "./modal.module.css";

export default function Modal({ closeModal = () => {} }) {
  return (
    <div
      id="defaultModal"
      aria-hidden="true"
      className={`${styles.modal} fixed flex justify-center top-0 backdrop-blur-sm left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full`}
    >
      <div className="flex flex-wrap justify-center content-center w-full max-w-2xl h-96 max-h-full">
        <div className="relative bg-white rounded-lg shadow-2xl">
          <div className="flex bg-pd-blue-dark items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-2xl text-white font-semibold dark:text-white">
              Let's Connect!
            </h3>
            <button
              onClick={() => closeModal()}
              type="button"
              className="text-white bg-transparent hover:bg-white hover:text-gray-900 hover:scale-105 duration-500 transition-all rounded-lg text-lg p-1.5 ml-auto inline-flex items-center "
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-8 space-y-2 pb-12">
            <p className="text-lg text-center leading-relaxed text-gray-600 dark:text-gray-400">
              We'd love to hear about your next project, so please reach out.
            </p>
            <p className="text-lg text-center leading-relaxed text-gray-600 dark:text-gray-400">
              (But even if you don't have a project in the works, it would still
              be great to connect!)
            </p>
          </div>

          <div className="flex items-center bg-black justify-center p-6 space-x-2 space-y-3 border-t border-gray-200 rounded-b dark:border-gray-600">
            <div className="flex flex-col gap-3 items-center justify-center space-x-8">
              <a
                href="mailto:info@parkcrestdesign.com"
                title="Email"
                target="_blank"
                className="flex flew-row gap-3 text-pd-blue hover:text-pd-green hover:no-underline"
              >
                <span className="sr-only">email</span>
                <svg
                  className="w-5 h-5 hover:scale-125 mt-0.5 duration-500 transition-all"
                  aria-hidden="true"
                  fill="currentcolor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-white">info@parkcrestdesign.com</span>
              </a>
              <a
                href="tel:631-741-9683"
                target="_blank"
                title="Call"
                className="flex flew-row gap-3 pb-3 text-pd-blue hover:text-pd-green hover:no-underline"
              >
                <span className="sr-only">phone</span>
                <svg
                  className="w-6 h-6 -mx-2  hover:scale-125 duration-500 transition-all"
                  aria-hidden="true"
                  fill="currentcolor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M16 0v3h-8c-1.104 0-2 .896-2 2v17c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-22h-2zm-6 21h-2v-1h2v1zm0-2h-2v-1h2v1zm3 2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 2h-2v-1h2v1zm0-2h-2v-1h2v1zm0-3h-8v-10h8v10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-white">631 741 9683</span>
              </a>
              <div className="flex flex-row gap-3 space-x-2">
                <a
                  href="https://www.linkedin.com/in/caseyconlin/"
                  title="LinkedIn"
                  target="_blank"
                  className="text-pd-blue hover:text-pd-green"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-6 h-6 hover:scale-125 duration-500 transition-all"
                    aria-hidden="true"
                    fill="currentcolor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>

                <a
                  href="https://github.com/CaseyConlin"
                  title="Github"
                  target="_blank"
                  className="text-pd-blue hover:text-pd-green"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-6 h-6 hover:scale-125 duration-500 transition-all"
                    aria-hidden="true"
                    fill="currentcolor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
