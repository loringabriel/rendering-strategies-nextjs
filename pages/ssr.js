import Link from "next/link";

export default function SsrPage({ date }) {
  return (
    <>
      <div>{date}</div>
      <Link href="/">Home</Link>
    </>
  );
}

export async function getServerSideProps() {
  const date = new Date().toLocaleString();
  return { props: { date } };
}
