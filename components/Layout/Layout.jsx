import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

function Layout(props) {
  return (
    <div className="min-h-full flex flex-col">
      <div className="h-[60px] z-50 fixed w-full bg-white border-b">
        <div className="h-[60px] w-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <Image src="/logo.png" alt="logo" width="36" height="36" />
            <div key={"page.name"} className="ml-4 lg:ml-6 flow-root">
              <Link href="/" passHref>
                <a
                  //   href={page.href}
                  className="-m-2 p-2 block font-medium text-gray-900"
                >
                  Home
                </a>
              </Link>
            </div>
            <div key={"page.name"} className="flow-root">
              <Link href="/products" passHref>
                <a
                  //   href={page.href}
                  className="-m-2 p-2 block font-medium text-gray-900"
                >
                  Products
                </a>
              </Link>
            </div>
            <div key={"page.name"} className="flow-root">
              <Link href="/about" passHref>
                <a
                  //   href={page.href}
                  className="-m-2 p-2 block font-medium text-gray-900"
                >
                  About
                </a>
              </Link>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Link href="/admin" passHref>
              <UserIcon
                className="cursor-pointer flex-shrink-0 h-6 w-6 text-gray-400 hover:text-gray-500 ease-in duration-150"
                aria-hidden="true"
              />
            </Link>

            <span
              className="mx-4 h-6 w-px bg-gray-200 lg:mx-2"
              aria-hidden="true"
            />
            <Link href="/checkout" passHref>
              <ShoppingCartIcon
                className="cursor-pointer flex-shrink-0 h-6 w-6 text-gray-400 hover:text-gray-500 ease-in duration-150"
                aria-hidden="true"
              />
            </Link>
            <span className="ml text-sm font-medium text-gray-700 group-hover:text-gray-800">
              0
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 mt-[60px] mx-auto w-full">{props.children}</div>
    </div>
  );
}
export default Layout;
