import Link from "next/link";
import { PiFileMagnifyingGlassLight } from "react-icons/pi";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <PiFileMagnifyingGlassLight className="text-color-accent" size={50} />
        <h3 className="text-color-accent text-4xl font-bold">NOT FOUND</h3>
        <Link
          href="/"
          className="underline text-color-primary hover:text-color-accent transition-all duration-300"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
