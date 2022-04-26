export default function SsrPage({ date }) {
  return <div>{date}</div>;
}

export async function getServerSideProps() {
  const date = new Date().toLocaleString();
  return { props: { date } };
}
