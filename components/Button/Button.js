import Link from "next/link";

function Button({ buttonText, link }) {
  return (
    <div className="mt-6">
      <Link href={link} passHref>
        <a
          href="#"
          className="inline-block bg-indigo-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-indigo-700"
        >
          {buttonText}
        </a>
      </Link>
    </div>
  );
}

export default Button;
