import { IAnimeData } from "@/models/anime";
import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ data }: Readonly<{ data: IAnimeData[] }>) {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {data.map((item: IAnimeData) => {
        return (
          <div key={item.mal_id} className="shadow-2xl rounded-3xl relative">
            <Link
              href={`/anime/${item.mal_id}`}
              className="cursor-pointer text-color-primary hover:text-color-accent transition-all duration-300"
            >
              <Image
                src={item.images.webp.large_image_url}
                width={600}
                height={600}
                alt=""
                className="w-full max-h-96 object-cover rounded-3xl brightness-[0.375]"
                priority
              />
              <h3 className="font-bold md:text-xl text-md absolute z-10 top-5 left-5 right-5">
                {item.title}
              </h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
