import Link from "next/link";

export default function Header({
  title,
  linkHref,
  linkTitle,
}: {
  title: string;
  linkHref?: string;
  linkTitle?: string;
}) {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-sm underline text-color-primary hover:text-color-accent transition-all duration-300"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}
