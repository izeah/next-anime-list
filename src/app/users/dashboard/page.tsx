import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await authUserSession();

  return (
    <div className="text-color-primary flex flex-col justify-center items-center mt-8">
      <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
      <Image
        width={500}
        height={500}
        src={user?.image as string}
        alt="hahaha"
      />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
}
