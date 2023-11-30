import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

export default function Navbar() {
  return (
    <header className="bg-color-accent w-full z-50">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href={`/`} className="font-bold text-2xl">
          IZEAHANIMELIST
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
}
