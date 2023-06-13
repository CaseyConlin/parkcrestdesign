import Image from "next/image";
import conlinimage from "../public/images/conlin.jpeg";

export default function AboutComponent() {
  return (
    <section className="bg-pd-blue my-20 text-white">
      <div className="container flex flex-col justify-center p-6 mx-auto lg:flex-row ">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 ">
          <Image
            className="max-w-xs rounded-full transition-all"
            priority
            src={conlinimage}
            alt="Parkcrest Design logo with globe"
          />
        </div>
        <div className="flex flex-col p-6 rounded-sm lg:max-w-md xl:max-w-lg">
          <h1 className="text-4xl font-extrabold ">About Parkcrest Design</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Located in the Hudson Valley in New York, we love helping businesses
            and nonprofits connect with and provide information to their users
            in ways that will deliver results. For over 10 years, we've been
            building websites, providing web development services, and creating
            print materials that our clients and their users love. Whether it's
            a website or a restaurant menu, we always employ the latest best
            practice in design and execution to maximize the reach and efficacy
            of our clients' efforts.
          </p>
        </div>
      </div>
    </section>
  );
}
