import Head from "next/head";
import Image from "next/image";
import { Promos } from "../helpers/helpers";
import Footer from "../components/Footer";
import Button from "../components/Button";

export async function getStaticProps() {
  const settings = await fetch(
    "https://62108f1f4cd3049e177f3adf.mockapi.io/settings/1"
  ).then((res) => res.json());

  return {
    props: {
      description: settings.description,
      headline: settings.headline,
    },
    revalidate: 10,
  };
}

export default function Home({ description, headline }) {
  return (
    <main className="">
      <Head>
        <title>Shop 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Promos />

      <div className="h-[590px] block lg:flex lg:items-center bg-gray-100">
        <div className="flex-1 h-[380px] pl-6  flex flex-col justify-center">
          <h1 className=" max-w-[520px] text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-[520px]">
            {description}
          </p>
          <Button link={"/products"} buttonText="Shop Productivity" />
        </div>

        <div className="relative flex-1 z-10 w-full h-[240px] lg:min-h-full">
          <Image
            src={"/home-page.jpg"}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
