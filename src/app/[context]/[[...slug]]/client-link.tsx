"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const ClientLink = (props: Props) => {
  const pathname = usePathname();
  console.log("==> Pathname: ", pathname);
  const path =
    pathname === "/"
      ? `${pathname}anotherpath?hello=world`
      : `${pathname}/anotherpath?hello=world`;
  return (
    <Link href={path} className="p-2 bg-green-300 text-black">
      Client link that should be server rendered
    </Link>
  );
};

export default ClientLink;
