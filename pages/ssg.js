import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ date }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/ssr">SSR</Link>
        <Link href="/">Home</Link>
        <div>Built at: {date}</div>
        <style jsx>{`
        .lorin {
            color:red
        `}</style>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const date = new Date().toLocaleString();
  return { props: { date }, revalidate: 10 };
}