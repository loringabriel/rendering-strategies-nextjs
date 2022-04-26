import Link from "next/link";

export default function SsrPage({ date }) {
  return (
    <>
      <div>{date}</div>
      <Link href="/">Home</Link>
      <Link href="/ssg">SSG</Link>
    </>
  );
}

export async function getServerSideProps() {
  const date = new Date().toLocaleString();
  return { props: { date } };
}
