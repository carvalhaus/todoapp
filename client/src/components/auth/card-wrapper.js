import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.svg";

function CardWrapper({ title, children }) {
  return (
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-5">
      <div className="w-full flex flex-col justify-center gap-12">
        <div className="relative block">
          <Link href="/" className="w-32">
            <Image src={logo} alt="Logo Onday image" width={114} height={38} />
          </Link>

          <h2 className="mt-6 text-base font-semibold sm:text-3xl md:text-4xl">
            {title}
            <span className="mt-4 leading-relaxed font-medium text-lg">
              {" "}
              to continue to OnDay
            </span>
          </h2>
        </div>

        {children}
      </div>
    </main>
  );
}

export default CardWrapper;
