import Link from "next/link";
import Image from "next/image";
import { PiArrowSquareLeft } from "react-icons/pi";
import Header from "@/components/Dashboard/Header";

export default function Page() {
  return (
    <section className="mt-4 w-full px-2">
      <Header title="My Collection" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/" className="relative border-2 border-color-accent">
          <Image
            src=""
            alt=""
            width={350}
            height={350}
            className="w-full"
          ></Image>
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-color-accent">
          <Image
            src=""
            alt=""
            width={350}
            height={350}
            className="w-full"
          ></Image>
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-color-accent">
          <Image
            src=""
            alt=""
            width={350}
            height={350}
            className="w-full"
          ></Image>
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-color-accent">
          <Image
            src=""
            alt=""
            width={350}
            height={350}
            className="w-full"
          ></Image>
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
}