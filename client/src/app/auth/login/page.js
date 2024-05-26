import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.svg";
import { FcGoogle } from "react-icons/fc";
import LoginButton from "@/components/auth/login-button";
import LoginForm from "@/components/auth/login-form";

function Login() {
  return (
    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-5">
      <div className="w-full flex flex-col justify-center gap-12">
        <div className="relative block">
          <Link href="/" className="w-32">
            <Image src={logo} alt="Logo Onday image" width={114} height={38} />
          </Link>

          <h2 className="mt-6 text-base font-semibold sm:text-3xl md:text-4xl">
            Sign in
            <span className="mt-4 leading-relaxed font-medium text-lg">
              {" "}
              to continue to OnDay
            </span>
          </h2>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-8">
          <LoginForm />

          <div className="flex items-center justify-center w-full">
            <span className="w-2/5 h-[2px] bg-slate-300 rounded-full"></span>
            <p className="w-1/5 text-center font-medium text-slate-700">or</p>
            <span className="w-2/5 h-[2px] bg-slate-300 rounded-full"></span>
          </div>

          <LoginButton className="w-3/4 drop-shadow-md text-lg">
            <Button className="w-full" variant="outline">
              <FcGoogle className="mr-3 w-6 h-6" />
              Continue with Google
            </Button>
          </LoginButton>

          <p>
            No account?{" "}
            <Link
              className="text-slate-700 hover:text-slate-800"
              href={"/auth/register"}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
