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
      <p className="max-w-md my-4 text-lg text-justify italic text-gray-600">
        {description}
      </p>
    </main>
  );
}
