import Image from "next/image";
import loginBg from "../../../public/login_bg.jpg";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function Auth() {
  return (
    <section className="bg-slate-50">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 justify-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-7">
          <Image
            alt="Image with notes in Auth page"
            src={loginBg}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-5">
          <div className="w-full flex flex-col justify-center gap-12">
            <div className="relative block">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Logo Onday image"
                  width={114}
                  height={38}
                />
              </Link>

              <h2 className="mt-6 text-base font-semibold sm:text-3xl md:text-4xl">
                Sign in
              </h2>

              <p className="mt-4 leading-relaxed font-medium">
                to continue to OnDay
              </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-8">
              <Button className="w-3/4">Continue with Google</Button>

              <div className="flex items-center justify-center w-full">
                <span className="w-2/5 h-[2px] bg-slate-300 rounded-full"></span>
                <p className="w-1/5 text-center font-medium text-slate-700">
                  or
                </p>
                <span className="w-2/5 h-[2px] bg-slate-300 rounded-full"></span>
              </div>

              <form className="w-3/4 flex flex-col items-center gap-4">
                <div className="w-full">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" className="drop-shadow-md" />
                </div>

                <Button className="w-full">Continue</Button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Auth;
