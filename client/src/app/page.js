import Image from "next/image";
import logo from "../../public/images/logo.svg";
import target from "../../public/target.svg";
import { Button } from "@/components/ui/button";

import { Vollkorn } from "next/font/google";
import Link from "next/link";

const vollkorn = Vollkorn({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-4/5 h-full flex flex-col gap-20">
        <nav className="py-6 flex justify-between">
          <Image src={logo} alt="Logo Onday image" width={114} height={38} />
          <Link href="/auth">
            <Button className="rounded-2xl font-semibold">Let's focus</Button>
          </Link>
        </nav>

        <section className="flex justify-between items-center">
          <div className={`${vollkorn.className} w-3/5`}>
            <h1 className="font-medium text-6xl ">
              Simple todo lists. Minimal and bloat-free.
            </h1>
            <h2 className="pt-2 text-2xl">
              Just the features you expect to focus on what’s important
            </h2>
          </div>

          <Image src={target} alt="Target image" width={500} height={500} />
        </section>
      </div>
    </main>
  );
}
