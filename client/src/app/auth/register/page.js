import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import CardWrapper from "@/components/auth/card-wrapper";
import GoogleButton from "@/components/auth/google-button";
import RegisterForm from "@/components/auth/register-form";

function Register() {
  return (
    <CardWrapper title={"Register"}>
      <div className="w-full flex flex-col items-center justify-center gap-8">
        <RegisterForm />

        <div className="flex items-center justify-center w-full">
          <span className="w-2/5 h-[2px] bg-slate-300 rounded-full"></span>
          <p className="w-1/5 text-center font-medium text-slate-700">or</p>
          <span className="w-2/5 h-[2px] bg-slate-300 rounded-full"></span>
        </div>

        <GoogleButton className="w-3/4 drop-shadow-md text-lg">
          <Button className="w-full" variant="outline">
            <FcGoogle className="mr-3 w-6 h-6" />
            Continue with Google
          </Button>
        </GoogleButton>

        <p>
          Already has an account?{" "}
          <Link
            className="text-slate-700 hover:text-slate-800"
            href={"/auth/login"}
          >
            Sign in
          </Link>
        </p>
      </div>
    </CardWrapper>
  );
}

export default Register;
