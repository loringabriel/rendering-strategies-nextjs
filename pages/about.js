import Image from "next/image";

export async function getStaticProps() {
  const settings = await fetch(
    "https://62108f1f4cd3049e177f3adf.mockapi.io/settings/1"
  ).then((res) => res.json());

  return { props: { description: settings.aboutDescription } };
}

export default function AboutPage({ description }) {
  return (
    <main className=" min-h-[500px] flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold my-4">About Us</h1>
      <div className="relative w-full max-w-2xl h-72">
        <Image
          src={"/about-us.png"}
          alt="team"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="max-w-md my-4 text-lg text-justify text-gray-600">
        {description}
      </p>
    </main>
  );
}
