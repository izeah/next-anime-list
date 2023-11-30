import "./globals.css";
import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import Navbar from "@/components/NavBar/index";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iseng App",
  description: "Project iseng-iseng, duit belakangan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
